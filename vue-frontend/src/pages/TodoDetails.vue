<template>
  <div>
    <Header />
    <Section>
      <Container>
        <div class="back" @click="goBack">
          <IoIosArrowBack :size="25" color="teal" />
        </div>

        <div v-if="todo">
          <p>Task:</p>
          <Title :title="todo.title" />
          <p>Is completed:</p>
          <Title
            :title="
              todo.isCompleted
                ? 'Task is completed'
                : 'You should finish the task'
            "
          />
        </div>
      </Container>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IoIosArrowBack } from "vue3-icons/io";

import { todoListApi } from "../utils/utils/todoApi";
import type ITodo from "../utils/interfaces/Todo.interface";

import Header from "../components/Header.vue";
import Section from "../components/Section.vue";
import Container from "../components/Container.vue";
import Title from "../components/Title.vue";

const router = useRouter();
const route = useRoute();

const todo = ref<ITodo | null>(null);

const goBack = () => {
  router.push("/my-todo-list");
};

onMounted(async () => {
  const todoId = route.params.id as string | undefined;
  const token = localStorage.getItem("token");

  if (!todoId || !token) return;

  try {
    const response = await todoListApi.getByid(todoId, token);
    todo.value = response.data.todo;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped lang="scss">
.back {
  margin-bottom: 40px;
  cursor: pointer;
}
</style>
