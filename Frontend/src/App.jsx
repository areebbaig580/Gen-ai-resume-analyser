import { AuthProvider } from './features/auth/authContext'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
