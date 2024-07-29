<template>
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <h1>Login Firebase</h1>
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
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const authUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario autenticado con éxito:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('No se pudo autenticar:', errorCode, errorMessage);
        });
};
</script>

<style scoped></style>
