import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    beforeEnter: (to, from) => {
      const destinationTo = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!destinationTo) {
        console.log(to.path.split("/").slice(1));
        console.log(to.path.split("/"));
        return {
          name: "NotFound",
          // keep url with params
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
      }
    },
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "my-custom-active-link",
});

export default router;
