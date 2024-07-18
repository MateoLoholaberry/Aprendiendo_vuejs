<template>
    <div>Hola mundo</div>
</template>

<script lang="ts">
export default {
    name: 'CycleOption',
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
    updated() {
        console.log('updated');
    },
    unmounted() {
        console.log('Unmounted');
    }
};
</script>

<style scoped></style>
