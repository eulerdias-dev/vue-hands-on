<template>
  <section id="layout-padrao">
    <header>
      <v-toolbar dark prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span class="text-h6">{{ titulo }}</span>
          <span class="text-subtitle-2">&nbsp;/&nbsp;{{ subtitulo }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <menus-auxiliares />
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <menu-principal />
      </v-navigation-drawer>
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
import { Vue, Component, Watch } from "vue-property-decorator";
import { MenusAuxiliares, MenuPrincipal } from "../unicos/toolbar";
@Component({
  components: {
    MenusAuxiliares,
    MenuPrincipal
  }
})
export default class LayoutPadrao extends Vue {
  private drawer = false;
  private titulo = "";
  private subtitulo = "";

  @Watch("$route", { immediate: true, deep: true })
  private lidarComMudancaDeURL(): void {
    this.titulo = this.$route.meta?.breadcrumb?.titulo;
    this.subtitulo = this.$route.params?.type?.replaceAll("-", " ");
  }
}
</script>
