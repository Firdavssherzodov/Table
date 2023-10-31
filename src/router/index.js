import { createRouter, createWebHistory } from "vue-router";
import Home1 from "../components/Home.vue";
import Admin from "../components/Admin.vue";
import wpm from '../group/wpm.vue';
import accuracy from '../group/accuracy.vue';
import consistency from '../group/consistency.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: Home1,
      component: Home1,
    },
    {
      path:'/admin',
      name:Admin,
      component:Admin
    },
    {
      path: "/wpm",
      name: wpm,
      component: wpm
    },
    {
      path:'/accuracy',
      name:accuracy,
      component:accuracy
    },
    {
      path:'/consistency',
      name:accuracy,
      component:accuracy
    }
  ],
});

export default router;
