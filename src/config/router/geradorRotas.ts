import { RouteConfig } from "vue-router";

export default class GeradorRotas {
  public gerar(): RouteConfig[] {
    const contexto = require.context("@/features/", true, /router.ts$/i);
    return contexto
      .keys()
      .map(contexto)
      .flatMap((ctx: any) => ctx.default);
  }
}
