import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import { Home, Signin, Signup, CreateTournament, Tournament, About, Match, Create, Matches as AllMatchs, Tournaments , Contact, Profile     } from '../pages'
import { CreateMatch, SelectGames, Protected, Team, Teams, SelectCreateOption, Matches, ShowMatches, ShowTournaments, CreateUserMatch} from '../components'
import {TournamentContextProvider} from '../context/TournamentContextProvider'
import { MatchContextProvider } from '../context/MatchContextProvider'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      exact: true,
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
          exact : true,
          element :(
            <Protected authentication = {false} restricted>
              <Signup/> 
            </Protected>
          )
        },
        {
          path : '/create',
          exact : true,
          element : (
            <Protected authentication>
                <Create/>
            </Protected>
          ),
          children:(
            [
              {
                path : '',
                element : (
                  <SelectCreateOption />
                )
              },
              {
                path : 'match',
                element : (
                  <SelectGames />
                )
              },
              {
                path : 'tournament',
                element : (
                  <SelectGames />
                )
              },
              {
                path : 'tournament/:game',
                element : (
                  <CreateTournament/>
                )
              },
              {
                path : 'match/:game',
                element : (
                  <CreateUserMatch/>
                )
              }
            ]
          )
        },
        {
          path : '/tournament/:tournamentId',
          exact : true,
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
          path : '/matches',
          exact : true,
          element : (
            <Protected authentication = {false}>
              <AllMatchs/>
            </Protected>
          ),
          children : (
            [
              {
                path : '',
                element : <ShowMatches matchType={"ongoing"}/>
              },
              {
                path : 'ongoing',
                element : <ShowMatches matchType={"ongoing"}/>
              },
              {
                path : 'upcoming',
                element : <ShowMatches matchType={"upcoming"}/>
              },
              {
                path : 'completed',
                element : <ShowMatches matchType={"completed"}/>
              }
            ]
          )
        },
        {
          path : '/tournaments',
          element : (
            <Protected authentication = {false}>
              <Tournaments/>
            </Protected>
          ),
          children : (
            [
              {
                path : '',
                element : (
                  <ShowTournaments/>
                )
              },
              {
                path : ':game',
                element : (
                  <ShowTournaments/>
                )
              }
            ]
          )
        },
        {
          path : '/match/:game/:matchId',
          element : (
            <Protected authentication = {false}>
              <MatchContextProvider>
              <Match/>
              </MatchContextProvider>
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
        },
        {
          path: '/profile',
          element: <Profile/>
        }

      ]
    }
  ])

  export default router;