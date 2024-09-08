<template>
    <h1>Componente lista</h1>
    <div class="container">
        <UserList v-for="user in props.content" :key="user.name" :content="user" />
    </div>
</template>

<script lang="ts" setup>
import UserList from '@/components/UserList.vue';

const props = defineProps(['content']);
</script>
