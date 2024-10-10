<template>
    <ChildComponent ref="porcentajeComponent" />

    <button @click="banco">Añadir cuenta bancaria</button>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import ChildComponent from './ChildComponent.vue'

const porcentajeComponent = useTemplateRef('porcentajeComponent')

const banco = () => {
    // Conectar con el servidor y añadir la cuenta bancaria
    porcentajeComponent.value.recalculate()
}
</script>

<style scoped></style>
