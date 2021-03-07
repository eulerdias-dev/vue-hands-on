import Rotas from "@/features/_crosscutting/utils/constants/rotasConstants";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import beforeEach from "./beforeEach";
import GeradorRota from "./geradorRotas";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: Rotas.FILMES_POPULARES
  }
];

routes.push(...new GeradorRota().gerar());

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(beforeEach);

export default router;
