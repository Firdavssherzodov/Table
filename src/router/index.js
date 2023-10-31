import { createRouter, createWebHistory } from "vue-router";
import Home1 from "../components/Home.vue";
import Admin from "../components/Admin.vue";
import wpm1 from '../components/wpm.vue';
import accuracy1 from '../components/accuracy.vue';
import consist  from '../components/consist.vue';


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
      name: wpm1,
      component: wpm1
    },
    {
      path:'/accuracy',
      name:accuracy1,
      component:accuracy1
    },
    {
      path:'/consistency',
      name:consist,
      component:consist
    }
  ],
});

export default router;
