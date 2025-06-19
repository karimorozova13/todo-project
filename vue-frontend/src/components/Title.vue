<template>
 <h1 class="title">{{ title }}</h1>
</template>

<script setup lang="ts">
interface TitleProps {
  title: string;
}
const props = defineProps<TitleProps>();
</script>

<style scoped lang="scss">
.title {
font-size: 35px;
  margin: 0;
  margin-bottom: 40px;
  @media only screen and (max-width: 991px) {
    font-size: 24px;
  }
}
</style>
