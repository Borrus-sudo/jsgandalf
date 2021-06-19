import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/404Page.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
  },
  {
    path: "/podcast",
    name: "Podcast",
    component: () =>
      import(/* webpackChunkName: "podcast" */ "../views/Podcast.vue"),
  },
  {
    path: "/projects",
    component: () =>
      import(/* webpackChunkName: "project" */ "../views/Project.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "404Page",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
