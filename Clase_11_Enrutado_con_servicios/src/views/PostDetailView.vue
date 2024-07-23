<template>
  <div class="post-container">
    <div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <RouterLink :to="{ name: 'PostList' }">Volver al listado</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import PostService from '@/Services/PostService'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const service = new PostService()
const post = service.getPost()

onMounted(async () => {
  const route = useRoute()
  let postId = route.params.id
  await service.fetchById(postId)
})
</script>

<style scoped>
.post-container {
  text-align: center;
}
</style>
