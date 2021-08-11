import { createRouter, createWebHashHistory } from 'vue-router';
import Home from "@/views/Home"
import Todos from "@/views/Todos"


const routes = [
    {
      path: '/',
      component: Home
    },
    {
        path: '/todos',
        component: Todos
      }
  
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router
  