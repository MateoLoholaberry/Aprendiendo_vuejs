<template>
    <div class="post">
        <h3>{{ title }}</h3>
        <p>
            {{ content }}
        </p>

        <button v-on:click="handleSaludo()">Di Hola!</button>
    </div>
</template>

<script lang="ts" setup>
// -------- Definicion de props y emits SIN setup --------
/* import { defineComponent } from 'vue';
 export default defineComponent({
    name: 'PostDetails',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: 'Sin contenido'
        }
    },
    emits: ['sayHello'],
    setup(props, { emit }) {
        const handleSaludo = () => {
            emit('sayHello', 'Hola desde un emit!');
        };

        return { props, handleSaludo };
    }
}); */

// -------- Definicion de props y emits CON setup --------
defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false,
        default: 'Sin contenido'
    }
});

const emit = defineEmits(['sayHello']);

const handleSaludo = () => {
    emit('sayHello', 'Hola desde un emit!');
};
</script>

<style scoped>
.post {
    background-color: antiquewhite;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 0.5rem;
    max-width: 300px;
}
</style>
