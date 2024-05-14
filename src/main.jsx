import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import SingleProductPage from './pages/SingleProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { jwtDecode } from 'jwt-decode';

const token = localStorage.getItem("token")
if(token) {
  const decodedToken = jwtDecode(token)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: !token ? <LoginPage /> : <HomePage />
  },
  {
    path: "/shop",
    element: !token ? <LoginPage /> : <ProductsPage />
  },
  {
    path: "/shop/:id",
    element: !token ? <LoginPage /> : <SingleProductPage />
  },
  {
    path: "/cart",
    element: !token ? <LoginPage /> : <CartPage />
  },
  {
    path: "/checkout",
    element: !token ? <LoginPage /> : <CheckoutPage />
  },
  {
    path: "/shop/category/:categoryName",
    element: !token ? <LoginPage /> : <ProductsByCategoriesPage />
  },
  {
    path: "/login",
    element: token ? <HomePage /> : <LoginPage />
  },
  {
    path: "/register",
    element: token ? <HomePage /> : <RegisterPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
