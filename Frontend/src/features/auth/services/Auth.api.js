import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

export async function LoginUser({ username, password }) {
  try {
    const response = await api.post('/api/auth/login', {
      username, password
    })

    return response.data

  } catch (err) {
    console.log(err)
  }
}

export async function RegisterUser({ username, email, password }) {
  try {
    const response = await api.post('/api/auth/register', {
      username, email, password
    })

    return response.data
  }
  catch (err) {
    console.log(err)
  }
}

export async function getMe() {
  try {
    const response = await api.get('/api/auth/get-me')

    return response.data
  } catch (err) {

  }
}