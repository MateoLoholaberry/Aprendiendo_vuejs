<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <button @click="handleClick">Di hola!!</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    content: string;
}>();

const emits = defineEmits<{
    sayHello: [msg: string];
}>();

const handleClick = () => {
    emits('sayHello', `Hola desde el post detail, del ${props.title}`);
};
</script>

<style scoped>
.post {
    width: 300px;
    border: 10px;
    height: 200px;
    background-color: antiquewhite;
    margin: 5px;
}
</style>
