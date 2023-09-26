import './App.css'
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
  return <RouterProvider router={router}></RouterProvider>
}

export default App
