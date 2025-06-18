<template>
  <div class="overlay">
  <div class="loader">
  <VueSpinnerClock size="200" color="teal" radius="50" />
  </div></div>
</template>

<script setup lang="ts">
import {
  VueSpinnerClock
} from 'vue3-spinners';
export default {
  components: {
    VueSpinnerClock,
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 1000;
}
.loader {
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
