import { createServer } from "miragejs";
import { sources } from "./sources";

export default function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,
    routes() {
      (this.namespace = "api"),
        this.get("/filmes/:type/:page", (request) => ({
          data: sources.filmes,
        })),
        this.get("/series/:type/:page", (request) => ({
          data: sources.series,
        }));
    },
  });

  return server;
}
