<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Sumar 1</button>
</template>

<script lang="ts" setup>
// CON SETUP
import { ref, type Ref } from 'vue';

let counter: Ref = ref(0);
const addCounter = (): void => {
    counter.value++;
};

// SIN SETUP
/* import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
    name: 'CounterComposition',
    setup() {
        let counter: Ref = ref(0)
        const addCounter = ():void => {
            counter.value++;
        }

        return {counter, addCounter}
    }
}) */
</script>

<style></style>
