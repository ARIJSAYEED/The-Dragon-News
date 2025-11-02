import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx'
import Root from './Components/Root.jsx'
import CategoryNews from './Components/CategoryNews.jsx'
import ErrorPage from './Components/ErrorPage.jsx'


let router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        loader: () => fetch('/news.json'),
        element: <CategoryNews></CategoryNews>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
