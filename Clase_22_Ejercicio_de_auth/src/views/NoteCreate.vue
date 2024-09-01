<template>
    <h1>Crear nota</h1>
    <form @submit.prevent="createNote">
        <div class="mb-3">
            <label for="title" class="form-label">Título</label>
            <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="mb-3">
            <label for="contenido" class="form-label">Contenido</label>
            <textarea class="form-control" id="contenido" v-model="contenido"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" @click="sendnote()">Crear</button>
    </form>
    <div class="mt-3">
        <p class="text-danger">{{ feedback }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore from '../stores/authStore.ts';
import router from '@/router';

const authStore = useAuthStore();

const title = ref('');
const contenido = ref('');
const feedback = ref('');

const sendnote = async () => {
    const response = await authStore.createNotes(title.value, contenido.value);

    if (response) {
        title.value = '';
        contenido.value = '';
        router.push({ name: 'list' });
    } else {
        alert('Error al crear la nota');
    }
};
</script>
