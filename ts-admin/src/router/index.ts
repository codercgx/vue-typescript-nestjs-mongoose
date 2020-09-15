import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import User from "@/views/User.vue";
// import Goods from "@/views/Goods.vue";
// import Home from "@/views/Home.vue";
// import BlogCreate from "@/views/BlogCreate.vue";
// import BlogList from "@/views/BlogList.vue";
// import CategoryCreate from "@/views/CategoryCreate.vue";
// import CategoryList from "@/views/CategoryList.vue";
import ECharts from "@/views/ECharts/ECharts.vue";
import ZcoolHome from "@/views/ZCool/ZcoolHome.vue";
import ZcoolLogin from "@/views/ZCool/ZcoolLogin.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/echarts"
  },
  {
    path: "/echarts",
    component: ECharts
  },
  {
    path: "/home",
    component: ZcoolHome
  },
  {
    path: "/login",
    component: ZcoolLogin
  }

  // {
  //   path: "/",
  //   redirect: "/user",
  // },
  // {
  //   path: "/user",
  //   name: "User",
  //   component: User,
  //   meta: { isPublic: true },
  // },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home,
  //   children: [
  //     {
  //       path: "/blog/create",
  //       component: BlogCreate,
  //     },
  //     {
  //       path: "/blog/list",
  //       component: BlogList,
  //     },
  //     {
  //       path: "/blog/edit/:id",
  //       component: BlogCreate,
  //       props: true,
  //     },
  //     {
  //       path: "/category/create",
  //       component: CategoryCreate,
  //     },
  //     {
  //       path: "/category/list",
  //       component: CategoryList,
  //     },
  //     {
  //       path: "/category/edit/:id",
  //       component: CategoryCreate,
  //       props: true,
  //     },
  //     {
  //       path: "/goods/index",
  //       component: Goods,
  //     },
  //   ],
  // },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next("/user");
  }
  next();
});
export default router;
