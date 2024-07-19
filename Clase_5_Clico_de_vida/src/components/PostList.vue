<template>
    <div class="container">
        <PostDetail
            v-for="post in info"
            :key="post.title"
            :title="post.title"
            :content="post.content"
            @sayHello="showAlert"
        />
    </div>
</template>

<script setup lang="ts">
import PostDetail from './PostDetail.vue';

interface Post {
    title: string;
    content: string;
}

let info: Array<Post> = [
    {
        title: 'Post 1',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, velit pariatur doloremque autem perferendis incidunt sap.'
    },
    {
        title: 'Post 2',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, velit pariatur doloremque autem perferendis incidunt sap.'
    },
    {
        title: 'Post 3',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, velit pariatur doloremque autem perferendis incidunt sap.'
    },
    {
        title: 'Post 4',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, velit pariatur doloremque autem perferendis incidunt sap.'
    },
    {
        title: 'Post 5',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, velit pariatur doloremque autem perferendis incidunt sap.'
    }
];

function showAlert(msg: string) {
    alert(msg);
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
}
</style>
