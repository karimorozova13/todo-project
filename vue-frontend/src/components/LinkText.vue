<template>
  <p class="text">
  <slot />
  </p>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.text {
  color: #ccc;
  font-size: 14px;
  margin: 0 auto;
  width: fit-content;
  a {
    color: #4682b4;
    text-decoration: none;
  }
}
</style>
