import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Layout from "@/layouts/index.vue";

Vue.use(VueRouter);

export const constantRoutes: RouteConfig[] = [
  {
    path: "/",
    name: "Landing",
    meta: {
      hidden: true,
    },
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        component: () =>
          import(/* webpackChunkName: "landing" */ "@/views/Landing/index.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      hidden: false,
      title: "Home",
    },
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/what-we-do",
    name: "WhatWeDo",
    meta: {
      title: "What We Do",
      hidden: false
    },
    component: Layout,
    redirect: "/what-we-do",
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "what-we-do" */ "@/views/WhatWeDo/index.vue"),
      },
    ],
  },
  {
    path: "/digital-divide",
    name: "DigitalDivide",
    meta: {
      hidden: false,
      title: "The digital divide",
    },
    component: Layout,
    redirect: '/digital-divide',
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "digital-divide" */ "@/views/DigitalDivide/index.vue"),
      },
    ],
  },
  {
    path: "/involved",
    name: "Involved",
    meta: {
      hidden: false,
      title: "Get involved",
    },
    component: Layout,
    redirect: '/involved',
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "involved" */ "@/views/Involved/index.vue"),
      },
    ],
  },
  {
    path: "/network",
    name: "Network",
    meta: {
      hidden: false,
      title: "Get network",
    },
    component: Layout,
    redirect: '/network',
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "network" */ "@/views/Network/index.vue"),
      },
    ],
  },
  {
    path: "/insignts",
    name: "Insignts",
    meta: {
      hidden: false,
      title: "Insignts",
    },
    component: Layout,
    redirect: '/insignts',
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "insignts" */ "@/views/Insignts/index.vue"),
      },
    ],
  },
  {
    path: "**",
    redirect: "/",
  },
];

const routes = [...constantRoutes]; // TODO:: merge route with role

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
