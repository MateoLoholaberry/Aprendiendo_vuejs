<template>
    <h1>Listado de usuarios</h1>

    <div>
        <button @click="handleLayout(ListLayout)">Ver en lista</button>
        <button @click="handleLayout(GridLayout)">Ver en tarjetas</button>
        <button @click="handleLayout(TableLayout)">Ver en tabla</button>
    </div>
    <component :is="layout" :content="users" />
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';

const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'));
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'));
const GridLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'));

const layout = ref(ListLayout);

const handleLayout = (newLayout) => (layout.value = newLayout);

const users = ref([
    {
        name: 'Juan',
        age: 25,
        position: 'Developer'
    },
    {
        name: 'Pedro',
        age: 30,
        position: 'Designer'
    },
    {
        name: 'Maria',
        age: 35,
        position: 'Manager'
    },
    {
        name: 'Ana',
        age: 40,
        position: 'Developer'
    },
    {
        name: 'Luis',
        age: 45,
        position: 'Designer'
    }
]);
</script>
