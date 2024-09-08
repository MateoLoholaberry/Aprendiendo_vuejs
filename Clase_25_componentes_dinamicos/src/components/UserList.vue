<template>
    <div class="list">
        <h3>{{ props.content.name }}</h3>
        <p>Edad: {{ props.content.age }}</p>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['content']);
</script>

<style scoped>
.list {
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>
