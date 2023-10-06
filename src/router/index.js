import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    props: (route) => ({ id: parseInt(route.params.id) }),
    path: "/destination/:id/:slug?",
    name: "destination.show",
    component: () => import("@/views/DestinationView.vue"),
    children: [
      {
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "my-custom-active-link",
});

export default router;
