<template>
  <li class="item">
    <h3 class="item-title" :class="{ completed: isCompleted }">{{ todo }}</h3>
    <div class="checkbox-box" @click="toggleCompleted">
      <div class="custom-checkbox">
        <svg
          v-if="isCompleted"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="green"
          class="size-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>
      <p>Complete task</p>
    </div>
    <NuxtLink :to="`/my-todo/${el._id}`">Read more</NuxtLink>
    <div class="buttons">
      <button class="btn" @click="isEdit = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <button class="btn" @click="deleteTodo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
    <Modal
      v-if="isEdit"
      :todo="todo"
      :closeModal="() => (isEdit = false)"
      :updateTodo="(value) => saveTodo(value, isCompleted)"
    />
  </li>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
// import { MdModeEditOutline, MdDone } from 'vue-icons/md';
// import { AiOutlineDelete } from 'vue-icons/ai';
import { RouterLink } from "vue-router";
import Modal from "./Modal.vue";
import { todoListApi } from "../utils/utils/todoApi";

interface TodoItemProps {
  el: {
    _id: string;
    title: string;
    isCompleted: boolean;
  };
  token: string;
  refreshData?: () => void;
}

const props = defineProps<TodoItemProps>();

const isCompleted = ref(props.el.isCompleted);
const todo = ref(props.el.title);
const isEdit = ref(false);

watch(
  () => props.el,
  (newVal) => {
    todo.value = newVal.title;
    isCompleted.value = newVal.isCompleted;
  },
  { immediate: true, deep: true }
);

const saveTodo = async (val: string, completed: boolean) => {
  try {
    todo.value = val;
    await todoListApi.updateOne(props.el._id, val, completed, props.token);
  } catch (error) {
    console.error(error);
  } finally {
    isEdit.value = false;
  }
};

const deleteTodo = async () => {
  try {
    await todoListApi.deleteOne(props.el._id, props.token);
    if (props.refreshData) await props.refreshData();
  } catch (error) {
    console.error(error);
  }
};

const toggleCompleted = async () => {
  isCompleted.value = !isCompleted.value;
  await saveTodo(todo.value, isCompleted.value);
};
</script>

<style scoped lang="scss">
.item {
  list-style: none;
  width: calc(100% / 3 - 40px / 3);
  box-shadow: 6px 5px 15px 1px rgba(64, 54, 54, 0.9);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-sizing: border-box;
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2 - 20px / 2);
  }
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
  a {
    color: yellowgreen;
  }
}
.item-title {
  font-size: 16px;
  margin: 0;
}
.completed {
  text-decoration: line-through;
}
.checkbox-box {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  p {
    margin: 0;
  }
}
.custom-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 6px;
}
.buttons {
  margin-left: auto;
  display: flex;
  gap: 10px;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  outline: none;
  background-color: #eee;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: transparent;
    opacity: 0.6;
  }
  svg {
    width: 20px;
  }
}
</style>
