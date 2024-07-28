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
        <button class="btn btn-primary">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let email = ref('')
let password = ref('')
</script>

<style scoped></style>
