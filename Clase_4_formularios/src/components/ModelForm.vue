<template>
  <form action="">
    <input type="text" v-model="inputText" /> <br /><br />
    <input type="checkbox" id="check1" v-model="agree" />
    <label for="check1">Aceptar terminos y condiciones</label>
    <select v-model="country">
      <option>Spain</option>
      <option value="Uk">UK</option>
      <option value="Fr">France</option>
    </select>
  </form>
  <h3>{{ inputText }}</h3>
  <h3>{{ agree }}</h3>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let inputText = ref<string>("");
let agree = ref<boolean>(false);
let country = ref<string>("Spain");
</script>

<style scoped>
/* Estilos del componente aquí */
</style>
