<template>
    <div>
        <input type="text" v-model="message" />
        <h3>{{ message }}</h3>
        <h3>{{ reversed }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, computed } from 'vue';

// -------- Option API --------
/* export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            message: ''
        };
    },
    computed: {
        reversed(): string {
            return this.message.split('').reverse().join('');
        }
    }
}); */

// -------- Composition API sin setup --------
/* export default defineComponent({
    name: 'ComputedExample',
    setup() {
        let message = ref('');

        const reversed = computed(() => message.value.split('').reverse().join(''));

        return { message, reversed };
    }
}); */

// -------- Composition API con setup--------
let message = ref('');
const reversed = computed(() => message.value.split('').reverse().join(''));
</script>

<style scoped></style>
