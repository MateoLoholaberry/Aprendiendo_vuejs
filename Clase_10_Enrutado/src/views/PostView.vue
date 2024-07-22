<template>
    <h1>Post seccion: {{ postId }}</h1>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

let postId = ref()

onMounted(() => {
    const route = useRoute()
    postId.value = route.params.id
})
</script>

<style></style>
