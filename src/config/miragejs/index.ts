import { createServer } from "miragejs";
import { sources } from "./sources";

export default function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    routes() {
      (this.namespace = "api"),
        this.get("/filmes/:type/:page", (_schema, request) => {
          const type = request.params.type;
          const page = request.params.page;
          return {data: sources.filmes(type)?.find(filme => filme.page === parseInt(page))}
          
        }),
        this.get("/series/:type/:page", (_request) => ({
          data: sources.series,
        }));
    },
  });

  return server;
}
