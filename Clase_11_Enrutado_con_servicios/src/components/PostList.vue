<template>
    <div class="center">
        <h1>Listado de posts</h1>
        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import PostService from '@/Services/PostService'
import { defineComponent, onMounted } from 'vue'

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})

//Con Conposition API sin setup
/* export default defineComponent({
    name: 'PostList',
    setup() {
        const service = new PostService()
        const posts = service.getPosts()

        onMounted(async () => {
            await service.fetchAll()
        })

        return { posts }
    }
}) */
</script>

<style scoped>
.center {
    text-align: center;
}

.post-list {
    width: 90vw;
    padding: 20px;
    list-style: none;
}

.post-list li {
    padding: 10px;
    width: 100%;
    border: 1px solid black;
}
</style>
