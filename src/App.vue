<template>
  <v-app id="app-filmes-e-series">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>
<style scoped></style>

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
