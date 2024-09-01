<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <h1>Registro</h1>
        <div class="mt-5 w-50">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="nombre@email.com"
                    v-model="email"
                />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Constraseña"
                    v-model="password"
                />
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary" @click="createUser()">Registrarse</button>
            </div>
            <div class="mt-3">
                <p class="text-danger">{{ feedback }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore from '../stores/authStore.ts';
import router from '@/router';

const authStore = useAuthStore();

let email = ref('');
let password = ref('');
let feedback = ref('');

const createUser = async () => {
    const response = await authStore.register(email.value, password.value);
    feedback.value = '';

    if (response) {
        router.push({ name: 'login' });
        // console.log('Usuario creado');
    } else {
        feedback.value = 'No se pudo crear el usuario';
        // console.log('Error al crear usuario');
    }
};
</script>
