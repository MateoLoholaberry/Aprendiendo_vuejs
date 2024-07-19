<template>
    <div>
        <label>Ingrese el valor</label>
        <input type="text" v-model="message" />
        <p>{{ message }}</p>
        <p>{{ reversedMessage }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

let message = ref('Hola Mundo');
const reversedMessage = computed(() => {
    return message.value.split('').reverse().join('');
});
</script>

<style scoped></style>
