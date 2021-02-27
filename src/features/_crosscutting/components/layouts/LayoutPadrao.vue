<template>
  <section id="layout-padrao">
    <header>
      <v-toolbar dark prominent>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title
          ><span>Filmes</span><span>/popular</span></v-toolbar-title
        >
        <v-spacer></v-spacer>
        <menus-auxiliares />
      </v-toolbar>
    </header>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </section>
</template>
<style scoped></style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { MenusAuxiliares } from "../unicos/toolbar";
@Component({
  components: {
    MenusAuxiliares
  }
})
export default class LayoutPadrao extends Vue {}
</script>
