<template>
  <v-list id="menu-principal" shaped>
    <v-list-group :value="i" v-for="(menu, i) in menus" :key="i">
      <template v-slot:activator>
        <v-list-item-title>{{ menu.titulo }}</v-list-item-title>
      </template>
      <v-list-item-group color="primary">
        <v-list-item v-for="(submenu, j) in menu.submenus" :key="j" link>
          <v-list-item-title v-text="submenu.titulo"></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list-group>
  </v-list>
</template>
<style scoped></style>
<script lang="ts">
import MenuBuilder from "@/features/_crosscutting/helpers/menuBuilder";
import MenuAplicacao from "@/features/_crosscutting/models/menu/menuAplicacao";
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class MenuPrincipal extends Vue {
  private menus: MenuAplicacao[] = MenuBuilder.gerar();

  mounted() {
    console.log(this.menus);
  }
}
</script>
