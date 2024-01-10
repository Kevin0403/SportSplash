import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {Protected} from './components'
import store from './store/store.js'
import { Signin, Signup } from './pages'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: '/',
      //   element: <Home/>
      // },
      {
        path : '/signin',
        element :(
          <Protected authentication = {false}>
            <Signin/>
          </Protected>
        )
      },
      {
        path : '/signup',
        element :(
          <Protected authentication = {false}>
            <Signup/>
          </Protected>
        )
      },
      {
        path : '/create-tournament',
        element : (
          <Protected authentication= {true}>
              <Signup/>
          </Protected>
        )
      }
      
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
