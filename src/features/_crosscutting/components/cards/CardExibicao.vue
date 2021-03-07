<template functional>
  <section id="card-exibicao">
    <v-card :loading="loading" class="my-2 media" tile>
      <template slot="progress">
        <v-progress-linear
          color="orange"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        :src="`https://image.tmdb.org/t/p/w500/${props.info.poster_path}`"
      ></v-img>
      <v-card-title class="text-subtitle-2 py-3"
        ><v-list-item-subtitle>{{
          props.info.title
        }}</v-list-item-subtitle></v-card-title
      >
      <slot />
    </v-card>
  </section>
</template>
<style scoped>
.media:hover {
  box-shadow: 0 0 3pt 2pt #ff5555;
  cursor: pointer;
}
img {
  height: 100vh;
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CardExibicao extends Vue {}
</script>
