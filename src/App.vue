<template>
  <v-app id="app-filmes-e-series" class="background">
    <component :is="layout"> </component>
  </v-app>
</template>
<style scoped>
.background {
  background-color: #37474f !important;
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  private layoutPadrao = "padrao";

  private get layout(): string {
    return `layout-${this.$route?.meta?.layout || this.layoutPadrao}`;
  }
}
</script>
