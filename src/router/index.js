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
    path: "/protected",
    name: "protected",
    component: () => import("@/views/ProtectedPage.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behaviour: "smooth" }), 300);
      })
    );
    // return {
    //   top: null,
    //   left: null,
    //   behavior: null,
    // };
  },
});

router.beforeEach((to, from) => {
  if (to.meta.requireAuth && !window.user) {
    debugger;
    router.push({
      name: "login",
    });
  }
});

export default router;
