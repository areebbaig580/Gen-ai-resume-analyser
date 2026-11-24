import { useContext, useEffect } from 'react'
import { AuthContext } from '../authContext'
import { LoginUser, RegisterUser, getMe } from '../services/Auth.api'

export const useAuth = () => {
  const { user, setUser, loading, setLoading } = useContext(AuthContext);

  const handleLogin = async ({ username, password }) => {
    setLoading(true);
    try {

      const response = await LoginUser({ username, password })

      setUser(response.username)

    } catch (err) { } finally {
      setLoading(false)
    }
  }

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try {

      const response = await RegisterUser({ username, email, password })
      setUser(response.username)

    } catch (err) { } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const getAndSetUser = async () => {
      try {

        const data = await getMe()
        setUser(data.user)
      } catch (err) { } finally {
        setLoading(false)
      }
    }

    getAndSetUser()
  }, [])

  return { handleLogin, handleRegister, user, loading }
}


