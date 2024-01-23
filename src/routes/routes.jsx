import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import { Home, Signin, Signup, CreateTournament, Tournament, About } from '../pages'
import { Protected, Team, Teams} from '../components'
import { Contact } from 'lucide-react'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
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
            <Protected authentication>
                <CreateTournament/>
            </Protected>
          )
        },
        {
          path : '/tournament/:tournamentId',
          element : (
            <Protected authentication = {false}>
                <Tournament/>
            </Protected>
          ),
          children : (
            [
              {
                path : '',
                element : <Teams/>
              },
              {
                path : 'teams',
                element : <Teams />
              },
              {
                path : 'matches',
                element : <h1>matches</h1>
              },
              {
                path : 'prizes',
                element : <h1>prizes</h1>
              },
              {
                path : 'rules',
                element : <h1>hello</h1>
              },
              {
                path : 'contact',
                element : <h1>hello</h1>
              }
            ]
          )
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/about',
          element: <About/>
        }

      ]
    }
  ])

  export default router;