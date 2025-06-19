<template>
 <div class="container" :style="customStyle">
 <slot/>
 </div>
</template>

<script setup lang="ts">
import { CSSProperties } from 'vue';

interface InputProps {
  style?: CSSProperties;
}

const props = defineProps<InputProps>();
const customStyle = props.style;
</script>

<style scoped lang="scss">
.container {
  text-align: center;
  width: 100%;
  width: calc(100% / 2 - 20px / 2);
  position: relative;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
  ::v-deep(div) {
    position: relative;
    width: 290px;
    margin: 0 auto;
    @media only screen and (max-width: 767px) {
      width: 250px;
    }
  }
  ::v-deep(input) {
    min-height: 40px;
    min-width: 290px;
    padding: 7px;
    border: 1px solid #ccc;
    background-color: #eee;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    &::placeholder {
      color: #ccc;
      font-size: 14px;
    }
    @media only screen and (max-width: 767px) {
      min-width: 250px;
    }
  }
}
</style>
