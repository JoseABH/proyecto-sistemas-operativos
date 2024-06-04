import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminPage from './pages/AdminPage'
import ChefPage from './pages/ChefPage'
import WaiterPage from './pages/WaiterPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import OrderPage from './pages/OrderPage'
import AddMenu from './pages/AddMenu'
import AddMesa from './pages/AddMesa'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'admin',
    element: <AdminPage />
  },
  {
    path: 'chef',
    element: <ChefPage />
  },
  {
    path: 'waiter',
    element: <WaiterPage />
  },
  {
    path: "/Ordenar/:id",
    element: <OrderPage/>
  },
  {
    path: '//AddMesa',
    element: <AddMesa />
  },
  {
    path: '/AddMenu',
    element: <AddMenu />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/Menu',
    element: <MenuPage />
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
