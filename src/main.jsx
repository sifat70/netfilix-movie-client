import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import AddMovie from './components/AddMovie/AddMovie';
import UpdateMovie from './components/UpdateMovie/UpdateMovie';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import MyCart from './components/MyCart/MyCart';
import Registration from './components/Registration/Registration';
import AuthProvider from './components/provider/AuthProvider';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    loader: () => fetch('https://netfilix-movie-server-6o6cgyabx-sifat70s-projects.vercel.app/movie')
  },
  {
    path: "addMovie",
    element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
  },
  {
    path: "updateMovie/:id",
    element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
    loader: ({params}) => fetch(`https://netfilix-movie-server-6o6cgyabx-sifat70s-projects.vercel.app/movie/${params.id}`)
  },
  {
    path: "myCart",
    element: <MyCart></MyCart>
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "registration",
    element: <Registration></Registration>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
