<template>
<div class="close" @click="onClick">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

</div>
</template>

<script setup lang="ts">
interface IProps {
  onClick: () => void
}
const props = defineProps<IProps>()
const onClick = props.onClick
</script>

<style scoped lang="scss">
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #ccc;
  width: 22px;
  height: 22px;
  background-color: #f1f2f4;
}
</style>
