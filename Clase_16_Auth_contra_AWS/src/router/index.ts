import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '@/views/AuthView.vue';
import FirebaseView from '@/views/FirebaseView.vue';
import SocialView from '@/views/SocialView.vue';
import AWSView from '@/views/AWSView.vue';

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
        },
        {
            path: '/social',
            name: 'social',
            component: SocialView
        },
        {
            path: '/aws',
            name: 'aws',
            component: AWSView
        }
    ]
});

export default router;
