<template>
    <div>Hola mundo2</div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, onBeforeMount } from 'vue';

onMounted(() => {
    console.log('Mounted');
});

onUpdated(() => {
    console.log('Updated');
});

onBeforeMount(() => {
    console.log('Before Mounted');
});
</script>

<style scoped></style>
