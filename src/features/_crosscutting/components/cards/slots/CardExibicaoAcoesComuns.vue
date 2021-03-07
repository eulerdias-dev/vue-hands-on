<template>
  <section id="card-exibicao-acoes-comuns">
    <v-card-actions>
      <span class="text-caption pl-2">IMDB: {{ info.vote_average }}</span>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon small @click.stop="lidarComSolicitacaoParaFavoritos"
          :color="existeIdNoFavoritos ? 'accent' : ''">mdi-heart</v-icon
        >
      </v-btn>
    </v-card-actions>
  </section>
</template>
<style scoped></style>

<script lang="ts">
import vxm from "@/features/_crosscutting/store";
import { HobbyTypeEnum } from "@/features/_crosscutting/utils/enum/hobbyTypeEnum";
import { Vue, Component, Prop } from "vue-property-decorator";
import FavoritoModel from "../../../models/favoritoModel";

@Component({})
export default class CardExibicaoAcoesComuns extends Vue {
  @Prop()
  private info!: {
    vote_average: number;
    type: HobbyTypeEnum;
    id: number;
  };

  private get obterFavoritos(): FavoritoModel[] {
    return this.info.type === HobbyTypeEnum.filme
      ? vxm.vxmPersistent.persistent.favoritos.obterFilmesFavoritados
      : vxm.vxmPersistent.persistent.favoritos.obterSeriesFavoritadas;
  }

  private get existeIdNoFavoritos(): boolean {
    return (
      this.obterFavoritos.find(
        (hobby) =>
          hobby.tipoHobby === this.info.type && hobby.id === this.info.id
      ) !== undefined
    );
  }

  private lidarComSolicitacaoParaFavoritos(): void {
    const favorito = new FavoritoModel(this.info.id, this.info.type);

    !this.existeIdNoFavoritos
      ? vxm.vxmPersistent.persistent.favoritos.adicionarAosFavoritos(favorito)
      : vxm.vxmPersistent.persistent.favoritos.removerDosFavoritos(favorito);
  }
}
</script>
