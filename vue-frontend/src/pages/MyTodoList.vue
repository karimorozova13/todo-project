<template>
  <div>
    <Header />
    <Section>
      <Container>
        <div v-if="owner" class="user">
          <div class="avatar">
            <template v-if="avatarUrl">
              <img :src="avatarUrl" alt="User avatar" />
            </template>
            <template v-else>
              <MdAddAPhoto size="48" />
              <p>Upload photo</p>
            </template>
            <input
              type="file"
              name="avatar"
              @change="onAvatarChange"
              class="avatar-input"
            />
          </div>
          <Title :title="`${owner.firstName} ${owner.lastName}`" />
        </div>

        <TodoList
          :token="token || ''"
          :refreshData="fetchTodoList"
          :todoList="todoList"
        />
        <button class="btn" @click="isAddNewTask = true">Add new task</button>

        <Modal
          v-if="isAddNewTask"
          :closeModal="() => (isAddNewTask = false)"
          :updateTodo="addNewTask"
          btnTitle="Add Task"
        />
      </Container>
    </Section>

    <Loader v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { MdAddAPhoto } from 'vue3-icons/md';

import { todoListApi } from '../utils/utils/todoApi';
import { authApi } from '../utils/utils/authApi';
import type { ITodo } from '../utils/interfaces/Todo.interface';


import Header from '../components/Header.vue';
import Container from '../components/Container.vue';
import Title from '../components/Title.vue';
import TodoList from '../components/TodoList.vue';
import Modal from '../components/Modal.vue';
import Section from '../components/Section.vue';
import Loader from '../components/Loader.vue';

interface IOwner {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  token: string;
  avatarUrl: string;
  _id: string;
}

const todoList = ref<ITodo[]>([]);
const isAddNewTask = ref(false);
const token = ref<string | null>(null);
const owner = ref<IOwner | null>(null);
const avatarUrl = ref<string>('');
const isLoading = ref(false);

const fetchTodoList = async () => {
  try {
    isLoading.value = true;
    const data = await todoListApi.getAll(token.value || '');
    todoList.value = data || [];
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const fetchOwner = async () => {
  try {
    isLoading.value = true;
    const data = await authApi.current(token.value || '');
    owner.value = data;
    avatarUrl.value = data.avatarUrl;
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const addNewTask = async (val: string) => {
  try {
    isLoading.value = true;
    await todoListApi.addNew(val, token.value || '');
    await fetchTodoList();
  } catch (error) {
    console.error(error);
  } finally {
    isAddNewTask.value = false;
    isLoading.value = false;
  }
};

const setAvatar = async (file: File) => {
  try {
    isLoading.value = true;
    const avatar = new FormData();
    avatar.append('avatar', file);

    const newPath = await authApi.upload(token.value || '', avatar);
    avatarUrl.value = newPath.url;
    await fetchOwner();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const onAvatarChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) setAvatar(file);
};

onMounted(() => {
  const tokenLS = localStorage.getItem('token');
  token.value = tokenLS;

  if (token.value) {
    fetchTodoList();
    fetchOwner();
  }
});

watch(token, (newToken) => {
  if (newToken) {
    fetchTodoList();
    fetchOwner();
  }
});
</script>

<style scoped lang="scss">
.user {
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    margin-top: 8px;
  }
}

.avatar-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}

.btn {
  padding: 7px;
  min-height: 40px;
  width: 290px;
  display: block;
  margin-left: auto;
  margin-top: 100px;
  background-color: teal;
  color: #fff;
  border: 1px solid teal;
  border-radius: 6px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    background-color: #fff;
    color: teal;
  }
}
</style>
