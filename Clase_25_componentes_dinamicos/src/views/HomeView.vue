<template>
    <h1>Listado de usuarios</h1>

    <div>
        <button>Ver en lista</button>
        <button>Ver en tarjetas</button>
        <button>Ver en tabla</button>
    </div>
    <component :is="layout" :content="users" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
