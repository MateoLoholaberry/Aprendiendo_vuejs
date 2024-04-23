<template>
    <div>
        <label>Subtotal</label>
        <input type="number" v-model="subtotal" />

        <h3>Total de impuestos a pagar: {{ totalVat }}</h3>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const vat = 21;
let subtotal = ref(0);

const totalVat = computed(() => {
    return (vat * subtotal.value) / 100;
});
</script>

<style scoped></style>
