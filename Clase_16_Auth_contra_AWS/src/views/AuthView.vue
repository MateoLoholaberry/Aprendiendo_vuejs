<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <h1>Login Tradicional</h1>
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
                <button class="btn btn-primary" v-on:click="authUser">Ingresar</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthService from '../Services/AuthService.ts';

let email = ref('');
let password = ref('');

const authUser = async () => {
    const auth = new AuthService();
    const successLogin = await auth.login(email.value, password.value);
    if (successLogin) {
        console.log('Usuario autenticado');
    } else {
        console.log('Usuario no autenticado');
    }
};
</script>

<style scoped></style>
