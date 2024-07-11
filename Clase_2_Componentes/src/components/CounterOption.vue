<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Sumar 1</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'CounterOption',
    data() {
        let counter = 0;
        return {counter}
    },
    methods: {
        addCounter() {
            this.counter++
        }
    }
});
</script>

<style>
</style>