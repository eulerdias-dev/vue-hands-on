<template>
  <section id="listagem-filmes">
    <v-row>
      <v-col cols="6" class="py-0" md="2" v-for="(filme, i) in filmes" :key="i" @click="lidarComSolicitacaoDeDetalhes(filme)">
        <card-exibicao
          :info="{ title: filme.title, poster_path: filme.poster_path }"

        >
          <v-divider dark></v-divider>
          <card-exibicao-acoes-comuns
            :info="{
              vote_average: filme.vote_average,
              type: tipoHobby,
              id: filme.id
            }"
          />
        </card-exibicao>
      </v-col>
    </v-row>
  </section>
</template>
<style scoped></style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { FilmeTypeEnum } from "../utils/enum/filmeTypeEnum";
import vxm from "../../_crosscutting/store";
import FilmeRequest from "../models/request/filmeRequest";
import CardExibicao from "../../_crosscutting/components/cards/CardExibicao.vue";
import FilmeModel from "../models/filmeModel";
import CardExibicaoAcoesComuns from "../../_crosscutting/components/cards/slots/CardExibicaoAcoesComuns.vue";
import { HobbyTypeEnum } from "../../_crosscutting/utils/enum/hobbyTypeEnum";
import DetalhesModel from "@/features/_crosscutting/models/DetalhesModel";

@Component({
  components: {
    CardExibicao,
    CardExibicaoAcoesComuns
  }
})
export default class Filmes extends Vue {
  private type!: string;
  private tipoHobby = HobbyTypeEnum.filme;

  private get ultimaPaginaPesquisada(): number {
    return vxm.filme.obterUltimaPaginaPesquisa;
  }

  private get filmes(): FilmeModel[] {
    return vxm.filme.obterFilmes;
  }

  private created() {
    const param = this.$route.params?.type;
    const type = Object.keys(FilmeTypeEnum)[
      Object.values(FilmeTypeEnum).indexOf(param)
    ];

    if (type !== undefined) {
      this.type = type;
      this.carregarFilmes();
    }
  }

  private async carregarFilmes(): Promise<void> {
    const request = new FilmeRequest(
      this.type,
      this.ultimaPaginaPesquisada + 1
    );
    vxm.filme.carregarFilmes(request);
  }

  private lidarComSolicitacaoDeDetalhes(filme: FilmeModel): void {
    const detalhes = filme as DetalhesModel;
    this.$router.push()
  }
}
</script>
