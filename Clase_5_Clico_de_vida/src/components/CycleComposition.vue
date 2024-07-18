<template>
    <div>Hola mundo</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue';

onBeforeMount(() => {
    console.log('OnbeforeMount');
});

onMounted(() => {
    console.log('Onmounted');
});

onUpdated(() => {
    console.log('Onupdated');
});

onUnmounted(() => {
    console.log('OnUnmounted');
});
</script>

<style scoped></style>
