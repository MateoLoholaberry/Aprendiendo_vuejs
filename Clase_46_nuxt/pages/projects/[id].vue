<template>
  <NuxtLayout name="projects">
    <h1>Project page id: {{ projectId }}</h1>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const projectId = ref(route.params.id);
</script>

<style scoped></style>
