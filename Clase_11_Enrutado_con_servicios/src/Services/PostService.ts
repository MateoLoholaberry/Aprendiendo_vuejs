import { ref, type Ref } from 'vue'
import type IPost from '@/interfaces/IPost'

class PostService {
    private posts: Ref<IPost[]>
    private post: Ref<IPost>

    constructor() {
        this.posts = ref([])
        this.post = ref({})
    }

    getPosts(): Ref<IPost[]> {
        return this.posts
    }

    getPost(): Ref<IPost> {
        return this.post
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

    async fetchById(id: string | string[]): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const jsonData = await response.json()
            this.post.value = jsonData
        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService
