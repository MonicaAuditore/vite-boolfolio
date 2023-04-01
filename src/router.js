import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AboutUs from "./pages/AboutUs.vue";
import PostsIndex from "./pages/PostsIndex.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/chi siamo",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/blog",
      name: "blog",
      component: PostsIndex,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export { router };
