<template>
 <button class="btn" :type="type" @click="onClick">{{ title }}</button>
</template>

<script setup lang="ts">
interface SubmitBtnProps {
  title: string;
  onClick?: () => void;
  type?: "submit" | "button";
}
const props = withDefaults(defineProps<SubmitBtnProps>(), {
  type: "button",
});
</script>

<style scoped lang="scss">
.btn {
padding: 7px;
  min-height: 40px;
  width: 290px;
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
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
