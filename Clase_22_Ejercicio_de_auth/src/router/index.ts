import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import NotesList from '@/views/NotesList.vue';
import RegisterView from '@/views/RegisterView.vue';
import NoteCreate from '@/views/NoteCreate.vue';
import useAuthStore from '../stores/authStore.ts';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'list',
            component: NotesList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/createnote',
            name: 'createNote',
            component: NoteCreate,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

// router.beforeEach((to, from) => {
//     const authStore = useAuthStore();
//     let loggedIn = authStore.user !== null;

//     if (to.meta.requiresAuth && !loggedIn) {
//         return { name: 'login' };
//     }
// });

export default router;
