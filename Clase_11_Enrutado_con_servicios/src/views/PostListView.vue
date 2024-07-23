<template>
  <div class="center">
    <h1>Listado de posts</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          <h3>{{ post.title }}</h3>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import PostService from '@/Services/PostService'
import { onMounted } from 'vue'

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
  await service.fetchAll()
})
</script>

<style scoped>
.center {
  text-align: center;
}

.post-list {
  width: 90vw;
  padding: 20px;
  list-style: none;
  margin: 0 auto;
}

.post-list li {
  padding: 10px;
  width: 100%;
  border: 1px solid black;
}

.post-list li:hover {
  background-color: #adadad;
}

.post-list li a {
  text-decoration: none;
  color: black;
  display: inline-block;
}

.post-list li a:hover {
  text-decoration: none;
  color: rgb(27, 81, 219);
  display: inline-block;
}
</style>
