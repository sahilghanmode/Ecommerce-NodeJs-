import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/redux/store.js'
import Products from './pages/Products.jsx'
import Protected from './components/Auth/Protected.jsx'
import ForgotPassword from './components/Auth/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import Admin from './pages/Admin.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path : "auth",
        children : [
          {
            path : "",
            element : <Auth/>
          },
          {
            path : "forgotPassword",
            element :  <ForgotPassword/>
          }
        ]
      },
      {
        path : "products",
        element : <Products/>
      },
    ]
  },
  {
    path : '/password/reset/:token',
    element : <ResetPassword/>
  },{
    path:"admin",
    element:<Admin/>,
    children:[{
      path:"dashboard",
      element:<Dashboard/>
    }]
  },
])


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>

)
