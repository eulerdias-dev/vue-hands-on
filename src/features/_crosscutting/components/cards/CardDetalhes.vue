<template>
  <v-card id="card-detalhes">
    <v-row class="d-flex">
      <v-col cols="12" md="6">
        <v-img
          :src="`https://image.tmdb.org/t/p/w500/${hobby.backdrop_path}`"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6">
          
      </v-col>
    </v-row>
  </v-card>
</template>
<style scoped></style>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DetalhesModel from "../../models/DetalhesModel";

@Component({})
export default class CardDetalhes extends Vue {
    @Prop()
    private hobby!: DetalhesModel;
}
</script>
