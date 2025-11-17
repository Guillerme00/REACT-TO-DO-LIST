import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <Register />
  }
])
