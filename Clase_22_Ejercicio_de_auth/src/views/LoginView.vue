<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <h1>Login</h1>
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
                <button class="btn btn-primary" @click="authUser()">Ingresar</button>
            </div>
            <div class="mt-3">
                <p class="text-danger">{{ feedback }}</p>
            </div>
        </div>
        <p>¿No tienes una cuenta?</p>
        <router-link :to="{ name: 'register' }">Registrate</router-link>
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

const authUser = async () => {
    const response = await authStore.login(email.value, password.value);

    if (response) {
        console.log('Usuario autenticado');
        authStore.user = email.value;
        router.push({ name: 'list' });
    } else {
        feedback.value = 'No se pudo autenticar el usuario';
        console.log('Error al autenticar usuario');
    }
};
</script>

<style scoped></style>
