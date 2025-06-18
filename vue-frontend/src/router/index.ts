import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import MyTodoList from '../pages/MyTodoList.vue'
import NotFound from '../pages/NotFound.vue'
import TodoDetails from '../pages/TodoDetails.vue'
import Home from '../pages/Home.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/my-todo-list', component: MyTodoList },
  { path: '/:pathMatch(.*)*', component: NotFound },
  { path: '/my-todo-list/:id', component: TodoDetails },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
