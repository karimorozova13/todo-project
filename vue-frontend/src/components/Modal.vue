<template>
<div class="backdrop">
<div class="modal">
<span class="close" @click="closeModal">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

</span>
<p class="title">Next up:</p>
<input v-model="value" @keyup.enter="handleEnter"  />
<button class="btn"  @click="updateTodo(value)">{{ btnTitle }}</button>
</div>
</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface ModalProps {
  todo?: string;
  updateTodo: (value: string) => void;
  closeModal?: () => void;
  btnTitle?: string;
}
const props = defineProps<ModalProps>();
const {updateTodo, closeModal } = props;

const value = ref(props.todo || '')

const btnTitle = props.btnTitle || 'Edit'


const handleEnter = () => {
  if (value.value.trim()) {
    updateTodo(value.value)
  }
}

const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    handleEnter()
  }
}

onMounted(() => {
  document.addEventListener('keyup', handleKeyUp)
})

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyUp)
})
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
.modal {
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  max-width: 500px;
  min-width: 500px;
  input {
    min-height: 40px;
    min-width: 200px;
    padding: 7px;
    background-color: transparent;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 575px) {
    max-width: 290px;
    min-width: 290px;
  }
}
.close {
   display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.title {
    font-size: 16px;
  margin-bottom: 10px;
}
.btn {
  background-color: teal;
  color: #fff;
  border: 1px solid teal;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  min-width: 200px;
  min-height: 40px;
  box-sizing: border-box;
  margin-left: auto;
  border-radius: 4px;
  margin-top: 40px;
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    background-color: #fff;
    color: teal;
  }
}
</style>
