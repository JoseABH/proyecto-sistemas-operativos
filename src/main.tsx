import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChefPage from './pages/ChefPage'
import WaiterPage from './pages/WaiterPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
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
