<template>
  <section id="card-exibicao-acoes-comuns">
    <v-card-actions>
      <span class="text-caption pl-2">IMDB: {{ info.vote_average }}</span>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon small @click="lidarComSolicitacaoParaFavoritos"
          >mdi-heart</v-icon
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

  private lidarComSolicitacaoParaFavoritos(): void {
    const favorito = new FavoritoModel(this.info.id, this.info.type);
    if (!vxm.vxmPersistent.persistent.favoritos.existeIdNoFavoritos(favorito)) {
      throw new Error("not implemented method");
    }
  }
}
</script>
