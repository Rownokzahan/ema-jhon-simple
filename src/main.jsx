import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componets/Layout/Home';
import Shop from './componets/Shop/Shop';
import Orders from './componets/Orders/Orders';
import Inventory from './componets/Inventory/Inventory';
import Login from './componets/Login/Login';
import cartProductLoader from './Loaders/cartProductLoader';
import Checkout from './componets/Checkout/Checkout';
import SignUp from './componets/SignUp/SignUp';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },

      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },

      {
        path: '/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: cartProductLoader,
      },

      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },

      {
        path: '/login',
        element: <Login></Login>
      },

      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>    
  </React.StrictMode>,
)
