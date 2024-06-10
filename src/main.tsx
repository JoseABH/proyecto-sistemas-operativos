import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChefPage from './pages/ChefPage'
import WaiterPage from './pages/WaiterPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import AdminPage from './pages/AdminPage'
import GestionMesa from './pages/GestionMesa'
import GestionMenu from './pages/GestionMenu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/admin',
    element: <AdminPage />
  },
  {
    path: '/Gestion/Mesa',
    element: <GestionMesa />
  },
  {
    path: '/Gestion/Menu',
    element: <GestionMenu />
  },
  {
    path: '/chef',
    element: <ChefPage />
  },
  {
    path: '/waiter',
    element: <WaiterPage />
  },
  {
    path: '/order/:id',
    element: <OrderPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
