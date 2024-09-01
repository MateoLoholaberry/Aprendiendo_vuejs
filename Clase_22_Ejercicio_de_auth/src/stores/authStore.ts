import { defineStore } from 'pinia';

const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null,
            baseUrl: 'https://localhost:7287'
        };
    },
    actions: {
        async register(email: string, password: string) {
            const uri = `${this.baseUrl}/register`;

            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });

            // console.log(rawResponse);

            if (rawResponse.status == 400) {
                console.log('Ha ocurrido un error');
                return false;
            } else {
                console.log('Usuario creado correctamente');
                return true;
            }
        },
        async login(email: string, password: string) {
            const uri = `${this.baseUrl}/login?useCookies=true`;

            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });
            console.log(rawResponse);
            if (rawResponse.status == 400) {
                console.log('Ha ocurrido un error');
                return false;
            } else {
                console.log('Usuario logueado correctamente');
                return true;
            }
        },
        async getNotes() {
            const uri = `${this.baseUrl}/notes`;

            const rawResponse = await fetch(uri, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                credentials: 'include'
            });

            const Response = await rawResponse.json();
            console.log(Response);
            return Response;
        },
        async createNotes(title: string, contenido: string) {
            const uri = `${this.baseUrl}/notes`;

            const rawResponse = await fetch(uri, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    title,
                    contenido
                })
            });

            console.log(rawResponse);
            if (rawResponse.status == 400) {
                console.log('Ha ocurrido un error');
                return false;
            } else {
                console.log('Usuario logueado correctamente');
                return true;
            }
        }
    }
});

export default useAuthStore;
