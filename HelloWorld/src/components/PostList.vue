<template>
    <div class="container">
        <PostDetail
            v-for="el in info"
            :key="el.title"
            :title="el.title"
            :content="el.content"
            @sayHello="showAlert"
        />
    </div>
</template>

<script setup lang="ts">
import PostDetail from './PostDetails.vue';

interface IPost {
    title: string;
    content: string;
}

let info: IPost[] = [
    {
        title: 'Titulo de post 1',
        content: 'Texto de ejemplo 1'
    },
    {
        title: 'Titulo de post 2',
        content: 'Texto de ejemplo 2'
    },
    {
        title: 'Titulo de post 3',
        content: 'Texto de ejemplo 3'
    },
    {
        title: 'Titulo de post 4',
        content: 'Texto de ejemplo 4'
    },
    {
        title: 'Titulo de post 5',
        content: 'Texto de ejemplo 5'
    }
];

function showAlert(msg: string) {
    alert(msg);
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
