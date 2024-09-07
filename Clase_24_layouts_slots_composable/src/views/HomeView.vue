<template>
    <MainLayout>
        <template v-slot:main>
            <h1>My home content</h1>
        </template>
        <template v-slot:footer>
            <h2>Footer de home</h2>
            <p>Mouse position: x: {{ x }}, y: {{ y }}</p>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { useMouse } from '@/composables/useMouse';

const { x, y } = useMouse();
</script>
