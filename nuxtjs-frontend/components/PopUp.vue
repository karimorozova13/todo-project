<template>
    <div v-if="isShow" class="box" @click.self="isShow = false">
    <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>


    <p class="text">{{ error }}</p>
      <CLose  @click="isShow = false" />
    </div>


</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CLose from './Close.vue'

const props = defineProps<{
  error: string | null
}>()

const isShow = ref(!!props.error)

watch(
  () => props.error,
  (newError) => {
    isShow.value = !!newError
  }
)
</script>

<style scoped lang="scss">
.box {
  position: fixed;
  top: 25px;
  right: 25px;
  min-height: 60px;
  min-width: 250px;
  background-color: #f1f2f4;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  z-index: 999;
  ::v-deep(svg) {
    width: 20px;
    height: 20px;
  }
}
.text {
    color: #ef4444;
  font-size: 14px;
}
</style>
