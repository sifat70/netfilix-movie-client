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

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    loader: () => fetch('http://localhost:5000/movie')
  },
  {
    path: "addMovie",
    element: <AddMovie></AddMovie>
  },
  {
    path: "updateMovie",
    element: <UpdateMovie></UpdateMovie>
  },
  {
    path: "login",
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
