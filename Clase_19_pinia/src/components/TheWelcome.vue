<template>
    <h1>{{ store.count }} X 2 = {{ store.doubleCount }}</h1>
    <button @click="store.increment(1)">Incrementar</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>
