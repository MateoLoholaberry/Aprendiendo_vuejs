import { ref, type Ref } from 'vue';

export default class AuthService {
    private Jwt: Ref<string>;
    private Error: Ref<string>;

    constructor() {
        this.Jwt = ref('');
        this.Error = ref('');
    }

    getJwt(): Ref<string> {
        return this.Jwt;
    }

    getError(): Ref<string> {
        return this.Error;
    }

    async login(email: string, password: string) {
        try {
            // Url de la API
            const url = 'https://localhost:7287/login?useCookies=true';
            const urlInfo = 'https://localhost:7287/manage/info';

            // Petición POST
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password
                })
            });
            console.log(response);

            const response2 = await fetch(urlInfo, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            const data = await response2.json();
            console.log(data);

            // Si el estado de la respuesta es diferente a 200 (OK) entonces mostrar el error
            if (response.status !== 200) {
                const data = await response.json();
                this.Error.value = data.title;
                return false;
            }

            // Si la respuesta es correcta entonces obtener la coockie
            // const data = await response.json();
            // console.log(data.email);

            //Obtener la cookie

            // this.jwt.value = data.data.access_token;
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}
