import { createRouter, createWebHistory } from "vue-router";
import Home1 from "../components/Home.vue";
import Admin from "../components/Admin.vue";

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
    }
  ],
});

export default router;
