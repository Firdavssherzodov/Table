import { createRouter, createWebHistory } from "vue-router";
import Home1 from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: Home1,
      component: Home1,
    },
  ],
});

export default router;
