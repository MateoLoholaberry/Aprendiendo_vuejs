<template>
    <RouterLink :to="{ name: 'createNote' }" class="btn btn-primary">Crear nota</RouterLink>
    <table class="table" v-if="notes">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Contenido</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="note in notes" :key="note.id">
                <th scope="row">{{ note.id }}</th>
                <td>{{ note.title }}</td>
                <td>{{ note.contenido }}</td>
            </tr>
        </tbody>
    </table>
    <p v-else>No hay datos</p>
</template>

<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue';
import useAuthStore from '../stores/authStore.ts';
import INote from '../types/INote';

const authStore = useAuthStore();

const notes = ref([]);

onMounted(async () => {
    notes.value = await authStore.getNotes();
});
</script>
