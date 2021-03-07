import {
  VuexModule,
  Module,
  Mutation,
  getModule,
  Action,
} from "vuex-module-decorators";
import store from "@/store";
import FilmeModel from "../models/filmeModel";
import { Inject } from "typescript-ioc";
import FilmeService from "../services/filmeService";
import FilmeRequest from "../models/request/filmeRequest";
import FilmeResult from "../models/result/filmeResult";

@Module({
  namespaced: true,
  name: "filme",
  store,
  dynamic: true,
})
export class FilmeStore extends VuexModule {
  private ultimaPagina = 0;
  private filmes: FilmeModel[] = [];

  @Inject
  private filmeService!: FilmeService;

  public get obterUltimaPaginaPesquisa(): number {
    return this.ultimaPagina;
  }

  public get obterFilmes(): FilmeModel[] {
    return this.filmes;
  }

  @Action({ commit: "atualizarFilmes" })
  public async carregarFilmes(request: FilmeRequest): Promise<FilmeResult> {
    return this.filmeService.obterPor(request);
  }

  @Mutation
  private atualizarFilmes(resultado: FilmeResult): void {
    this.ultimaPagina = resultado.page;
    this.filmes = [...this.filmes, ...resultado.results];
  }
}

export default getModule(FilmeStore);
