import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import FirebaseView from '@/views/FirebaseView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: AuthView
        },
        {
            path: '/firebase',
            name: 'fireabse',
            component: FirebaseView
        }
    ]
});

export default router;
