import { ref, type Ref } from 'vue'
import type IPost from '@/interfaces/IPost'

class PostService {
    private posts: Ref<IPost[]>

    constructor() {
        this.posts = ref([])
    }

    getPosts(): Ref<IPost[]> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const jsonData = await response.json()
            this.posts.value = jsonData
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService
