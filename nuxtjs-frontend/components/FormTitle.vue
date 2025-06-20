<template>
  <h1 class="title">{{title}}</h1>
</template>

<script setup lang="ts">
interface FormTitleProps {
  title: string;
}
const props = defineProps<FormTitleProps>()
const { title } = props;
</script>

<style scoped lang="scss">
.title {
 font-size: 35px;
  text-align: center;
  color: teal;
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 60px;
}
</style>
