import { VuexModule, Module, Mutation } from "vuex-module-decorators";
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

  @Mutation
  public adicionarAosFavoritos(favorito: FavoritoModel): void {
    this.favoritos.push(favorito);
  }

  @Mutation
  public removerDosFavoritos(favorito: FavoritoModel): void {
    this.favoritos = this.favoritos.filter(
      (fav) => !(fav.id === favorito.id && fav.tipoHobby === favorito.tipoHobby)
    );
  }
}
