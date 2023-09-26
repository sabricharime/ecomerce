import * as react from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/footer/Footer'
import Root from './layout/Root'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/content/Main'
import Store from './layout/Store'
import Cart from './layout/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path:'/cart',
        element:<Cart />
      }
    ],
  },
])

function App() {
  const [set, seterSet] = react.useState()

  return <RouterProvider router={router}></RouterProvider>
}

export default App
