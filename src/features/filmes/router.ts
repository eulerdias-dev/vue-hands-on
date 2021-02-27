import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
    {
        path: "/filmes/:type",
        component: () => import ("./views/ListagemFilmes.vue")
    }
];

export default routes;