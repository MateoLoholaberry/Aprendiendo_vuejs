<template>
    <div>Hola mundo</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CicleOption',
    created() {
        console.log('Created');
    },
    mounted() {
        console.log('Mounted');
    },
    updated() {
        console.log('Updated');
    },
    unmounted() {
        console.log('UnMounted');
    }
});
</script>

<style scoped></style>
