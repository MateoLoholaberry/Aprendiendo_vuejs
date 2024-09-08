<template>
    <div class="card">
        <h3>{{ props.content.name }}</h3>
        <p>Edad: {{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['content']);
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    text-align: center;
}
</style>
