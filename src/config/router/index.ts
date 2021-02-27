import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import beforeEach from "./beforeEach";
import GeradorRota from "./geradorRotas";

Vue.use(VueRouter);

const routes: RouteConfig[] = [];

routes.push(...new GeradorRota().gerar());

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(beforeEach);

export default router;
