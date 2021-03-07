import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
    {
        path: "/filmes/:type",
        component: () => import ("./views/Filmes.vue"),
        meta: { 
            breadcrumb: {
                titulo: "Filmes"
            }
        }
    }
];

export default routes;