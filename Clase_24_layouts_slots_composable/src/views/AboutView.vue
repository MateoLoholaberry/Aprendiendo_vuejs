<template>
    <MainLayout>
        <template #main>
            <h1>My about content</h1>
        </template>
        <template #footer>
            <h2>Footer de about</h2>
            <p>Mouse position: x: {{ x }}, y: {{ y }}</p>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useMouse } from '@/composables/useMouse';

const { x, y } = useMouse();
</script>
