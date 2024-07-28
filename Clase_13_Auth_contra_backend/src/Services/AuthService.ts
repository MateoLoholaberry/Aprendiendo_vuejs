import { ref } from 'vue';

class AuthService {
    constructor() {
        this.jwt = ref();
    }

    getJwt() {
        return this.jwt;
    }

    async login(email: string, password: string) {
        try {
            // Url de la API
            const url = 'http://localhost:3000/auth/login';

            // Petición POST
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}
