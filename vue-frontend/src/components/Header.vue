<template>
  <div class="header">
  <div class="btn" @click="logout">
  <p>Log out</p></div>
  </div>
</template>

<script setup lang="ts">
 import { useRouter } from 'vue-router'
import { authApi } from '../utils/authApi'

const router = useRouter()

  const logout = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      await authApi.logout(token);
    } else {
      console.warn("No token found, skipping logout.");
    }

    localStorage.removeItem("token");
    router.push("/login");
  };
</script>

<style scoped lang="scss">
.header {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #c0d1c2;
  cursor: pointer;
  transition: opacity 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:hover,
  &:focus {
    opacity: 0.6;
  }
}
.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  p {
    font-size: 16px;
  }
}
</style>
