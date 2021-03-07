import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import FavoritoModel from "../models/favoritoModel";
import { HobbyTypeEnum } from "../utils/enum/hobbyTypeEnum";
@Module({
  name: "favoritos",
})
export default class FavoritosStore extends VuexModule {
  private favoritos: FavoritoModel[] = [];

  public get obterFilmesFavoritados(): FavoritoModel[] {
    return this.favoritos.filter(
      (hobby) => hobby.tipoHobby === HobbyTypeEnum.filme
    );
  }

  public get obterSeriesFavoritadas(): FavoritoModel[] {
    return this.favoritos.filter(
      (hobby) => hobby.tipoHobby === HobbyTypeEnum.serie
    );
  }

  @Action
  public async existeIdNoFavoritos(favorito: FavoritoModel): Promise<boolean> {
    return (
      this.favoritos.find(
        (hobby) =>
          hobby.tipoHobby === favorito.tipoHobby && hobby.id === favorito.id
      ) !== undefined
    );
  }
}
