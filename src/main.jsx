import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx'
import Root from './Components/Root.jsx'
import CategoryNews from './Components/CategoryNews.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import NewsDetails from './Components/NewsDetails.jsx'
import PrivateRoute from './Provider/PrivateRoute.jsx'
import Loading from './Components/Loading.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        loader: () => fetch('/news.json'),
        element: <CategoryNews></CategoryNews>,
        hydrateFallbackElement: <Loading></Loading>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/news-details/:id',
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
