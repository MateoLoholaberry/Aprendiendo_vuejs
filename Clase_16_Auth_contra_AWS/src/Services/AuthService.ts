import { ref, type Ref } from 'vue'

export default class AuthService {
  private jwt: Ref<string>
  private Error: Ref<string>

  constructor() {
    this.jwt = ref('')
    this.Error = ref('')
  }

  getJwt(): Ref<string> {
    return this.jwt
  }

  getError(): Ref<string> {
    return this.Error
  }

  async login(email: string, password: string) {
    try {
      // Url de la API
      const url = 'http://localhost:3000/auth/login'

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
      })

      const data = await response.json()

      if (data.error) {
        this.Error.value = 'Usuario o contraseña incorrectos'
        return false
      }

      this.jwt.value = data.data.access_token
      return true
    } catch (error) {
      console.log(error)
    }
  }
}
