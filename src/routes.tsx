import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <h1>New Task</h1>
  }
])
