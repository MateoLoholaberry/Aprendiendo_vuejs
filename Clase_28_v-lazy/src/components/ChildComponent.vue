<template>
    <h1>Porcentaje completado: {{ porcentaje }}%</h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const porcentaje = ref(0)

onMounted(() => {
    porcentaje.value = 20
})

const recalculate = () => {
    // ActuaLIzar el porcentaje
    porcentaje.value = 42
}

defineExpose({
    recalculate
})
</script>

<style scoped></style>
