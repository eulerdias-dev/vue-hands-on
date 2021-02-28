<template>
  <v-list nav id="menu-principal">
    <v-list-group :value="true" prepend-icon="mdi-account-circle">
      <template v-slot:activator>
        <v-list-item-title>Filmes</v-list-item-title>
      </template>
    </v-list-group>
    <v-list-item v-for="([titulo, link], i) in menus" :key="i" link>
      <v-list-item-title v-text="titulo" :to="link"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<style scoped></style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class MenuPrincipal extends Vue {}
</script>
