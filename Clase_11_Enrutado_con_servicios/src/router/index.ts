import { createRouter, createWebHistory } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostDetailView from "../views/PostDetailView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: { name: 'PostList' }
        },
        {
            path: '/posts',
            name: 'PostList',
            component: PostListView
        },
        {
            path: '/post/:id',
            name: 'PostDetail',
            component: PostDetailView
        }
    ]
})

export default router