import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import { Home, Signin, Signup, CreateTournament, Tournament, About, Match } from '../pages'
import { CreateMatch, SelectGames, Matches, Protected, Team, Teams} from '../components'
import { Contact } from 'lucide-react'
import {TournamentContextProvider} from '../context/TournamentContextProvider'

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
            <Protected authentication = {false} restricted>
              <Signin/>
            </Protected>
          )
        },
        {
          path : '/signup',
          element :(
            <Protected authentication = {false} restricted>
              <Signup/> 
            </Protected>
          )
        },
        {
          path : '/create-tournament',
          element : (
            <Protected authentication>
                <SelectGames/>
            </Protected>
          )
        },
        {
          path : '/create-tournament/:game',
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
              <TournamentContextProvider>
                <Tournament/>
              </TournamentContextProvider>
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
                element : <Matches />
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
                path : 'create-match',
                element : (<Protected authentication = {true}>
                  <CreateMatch />
              </Protected>)
              }
            ]
          )
        },
        {
          path : 'match/:matchId',
          element : (
            <Protected authentication = {false}>
              <Match/>
            </Protected>
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