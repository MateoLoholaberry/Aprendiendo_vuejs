<template>
    <h1>Componente card</h1>
    <div class="container">
        <UserCard v-for="user in props.content" :key="user.name" :content="user" />
    </div>
</template>

<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';

const props = defineProps(['content']);
</script>

<style scoped>
.container {
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
</style>
