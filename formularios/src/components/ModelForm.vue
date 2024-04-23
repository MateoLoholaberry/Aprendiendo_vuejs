<script setup lang="ts">
import { ref } from 'vue';

let inputText = ref('');
let isAgree = ref(false);

let country = ref('');
</script>

<template>
    <form action="">
        <label for="text">Texto</label> <br />
        <input type="text" id="text" v-model="inputText" />

        <label for="terms">Terminos y condiciones</label>
        <input type="checkbox" id="terms" v-model="isAgree" />

        <select v-model="country">
            <option value="spain">Spain</option>
            <option value="france">France</option>
            <option value="uk">UK</option>
        </select>
    </form>
</template>

<style scoped></style>
