<template>
  <div class="section"><slot/></div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.section {
  width: 100vw;
  padding: 100px 0;
@media only screen and (max-width: 991px) {
    padding: 60px 0;
}}
</style>
