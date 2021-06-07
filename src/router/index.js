import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/test-wg/Home";
import About from "@/components/test-wg/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: { title: "主页", keepAlive: true },
      children: [
        {
          path: "/home/news", // 斜杠 / 永远代表 根路径
          name: "news",
          component: () => import("@/components/test-wg/News"),
          meta: { title: "news", keepAlive: true }
        },
        {
          path: "message", // 简化写法
          name: "message",
          component: () => import("@/components/test-wg/Message"),
          meta: { title: "信息", keepAlive: true }
        }

        // {
        //   path: "",
        //   redirect: "/home/news"
        // }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { title: "详情页", keepAlive: true }
    },
    {
      path: "/",
      redirect: "/about"
    }
  ]
});
