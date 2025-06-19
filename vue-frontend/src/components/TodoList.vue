<template>
  <ul class="list">
<TodoItem
  v-for="el in todoList"
  :key="el._id"
  :token="token"
  :refresh-data="refreshData"
  :el="el"
/>

  </ul>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue';
import { defineProps } from 'vue';


interface TodoListProps {
  todoList: { title: string; isCompleted: boolean; _id: string }[];
  token: string;
  refreshData?: () => void;
}
const props = withDefaults(defineProps<TodoListProps>(), {
  refreshData: () => {},
});

</script>

<style scoped lang="scss">
.list {
   display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  flex-grow: 1;
}
</style>
