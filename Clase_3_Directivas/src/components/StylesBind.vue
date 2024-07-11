<template>
    <p
        v-bind:style="{
            backgroundColor: '#0f0',
            color: c
        }"
    >
        El mensaje se ha enviado satisfactoriamente.
    </p>
    <button @click="handleClick">Cambiar color</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let c = ref('#fff');

const handleClick = () => {
    c.value = '#f00';
};
</script>

<style></style>
