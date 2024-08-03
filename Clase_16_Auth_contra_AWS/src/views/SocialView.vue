<template>
    <h1>Social Login</h1>

    <button class="btn btn-secondary" @click="loginWithGoogle()">Login with Google</button> |
    <button class="btn btn-primary">Login with Facebook</button> |
    <button class="btn btn-dark">Login with Github</button> |
    <button class="btn btn-danger">Login with Microsoft</button>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log('User signed in with Google');
            console.log(result);
        })
        .catch((error) => {
            console.log('Error signing in with Google');
            console.error(error);
        });
};
</script>

<style scoped></style>
