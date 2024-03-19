import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import App from '../App'
import { Home, Signin, Signup, CreateTournament, Tournament, About, Match, Create, Matches as AllMatchs, Tournaments , Contact, Profile     } from '../pages'
import { CreateMatch, SelectGames, Protected, Team, Teams, SelectCreateOption, Matches, ShowMatches, ShowTournaments, CreateUserMatch} from '../components'
import {TournamentContextProvider} from '../context/TournamentContextProvider'
import { MatchContextProvider } from '../context/MatchContextProvider'

import { Route } from 'react-router-dom';

const router = (
  <Route path="/">
    <App>
      <Route index element={() => <Home />} />
      <Route path="signin" element={<Protected authentication={false} restricted><Signin /></Protected>} />
      <Route path="signup" element={<Protected authentication={false} restricted><Signup /></Protected>} />
      <Route path="create" element={<Protected authentication><Create /></Protected>}>
        <Route index element={<SelectCreateOption />} />
        <Route path="match" element={<SelectGames />} />
        <Route path="tournament" element={<SelectGames />} />
        <Route path="tournament/:game" element={<CreateTournament />} />
        <Route path="match/:game" element={<CreateUserMatch />} />
      </Route>
      <Route path="tournament/:tournamentId" element={<Protected authentication={false}><TournamentContextProvider><Tournament /></TournamentContextProvider></Protected>}>
        <Route index element={<Teams />} />
        <Route path="teams" element={<Teams />} />
        <Route path="matches" element={<Matches />} />
        <Route path="prizes" element={<h1>prizes</h1>} />
        <Route path="rules" element={<h1>hello</h1>} />
        <Route path="create-match" element={<Protected authentication={true}><CreateMatch /></Protected>} />
      </Route>
      <Route path="matches" element={<Protected authentication={false}><AllMatchs /></Protected>}>
        <Route index element={<ShowMatches matchType="ongoing" />} />
        <Route path="ongoing" element={<ShowMatches matchType="ongoing" />} />
        <Route path="upcoming" element={<ShowMatches matchType="upcoming" />} />
        <Route path="completed" element={<ShowMatches matchType="completed" />} />
      </Route>
      <Route path="tournaments" element={<Protected authentication={false}><Tournaments /></Protected>}>
        <Route index element={<ShowTournaments />} />
        <Route path=":game" element={<ShowTournaments />} />
      </Route>
      <Route path="match/:game/:matchId" element={<Protected authentication={false}><MatchContextProvider><Match /></MatchContextProvider></Protected>} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Protected authentication={true}><Profile /></Protected>} />
    </App>
  </Route>
);


// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />,
//       children: [
//         {
//           path: '/',
//           element: <Home/>
//         },
//         {
//           path : '/signin',
//           element :(
//             <Protected authentication = {false} restricted>
//               <Signin/>
//             </Protected>
//           )
//         },
//         {
//           path : '/signup',
//           element :(
//             <Protected authentication = {false} restricted>
//               <Signup/> 
//             </Protected>
//           )
//         },
//         {
//           path : '/create',
//           element : (
//             <Protected authentication>
//                 <Create/>
//             </Protected>
//           ),
//           children:(
//             [
//               {
//                 path : '',
//                 element : (
//                   <SelectCreateOption />
//                 )
//               },
//               {
//                 path : 'match',
//                 element : (
//                   <SelectGames />
//                 )
//               },
//               {
//                 path : 'tournament',
//                 element : (
//                   <SelectGames />
//                 )
//               },
//               {
//                 path : 'tournament/:game',
//                 element : (
//                   <CreateTournament/>
//                 )
//               },
//               {
//                 path : 'match/:game',
//                 element : (
//                   <CreateUserMatch/>
//                 )
//               }
//             ]
//           )
//         },
//         {
//           path : '/tournament/:tournamentId',
//           element : (
//             <Protected authentication = {false}>
//               <TournamentContextProvider>
//                 <Tournament/>
//               </TournamentContextProvider>
//             </Protected>
//           ),
//           children : (
//             [
//               {
//                 path : '',
//                 element : <Teams/>
//               },
//               {
//                 path : 'teams',
//                 element : <Teams />
//               },
//               {
//                 path : 'matches',
//                 element : <Matches />
//               },
//               {
//                 path : 'prizes',
//                 element : <h1>prizes</h1>
//               },
//               {
//                 path : 'rules',
//                 element : <h1>hello</h1>
//               },
//               {
//                 path : 'create-match',
//                 element : (<Protected authentication = {true}>
//                   <CreateMatch />
//               </Protected>)
//               }
//             ]
//           )
//         },
//         {
//           path : '/matches',
//           element : (
//             <Protected authentication = {false}>
//               <AllMatchs/>
//             </Protected>
//           ),
//           children : (
//             [
//               {
//                 path : '',
//                 element : <ShowMatches matchType={"ongoing"}/>
//               },
//               {
//                 path : 'ongoing',
//                 element : <ShowMatches matchType={"ongoing"}/>
//               },
//               {
//                 path : 'upcoming',
//                 element : <ShowMatches matchType={"upcoming"}/>
//               },
//               {
//                 path : 'completed',
//                 element : <ShowMatches matchType={"completed"}/>
//               }
//             ]
//           )
//         },
//         {
//           path : '/tournaments',
//           element : (
//             <Protected authentication = {false}>
//               <Tournaments/>
//             </Protected>
//           ),
//           children : (
//             [
//               {
//                 path : '',
//                 element : (
//                   <ShowTournaments/>
//                 )
//               },
//               {
//                 path : ':game',
//                 element : (
//                   <ShowTournaments/>
//                 )
//               }
//             ]
//           )
//         },
//         {
//           path : '/match/:game/:matchId',
//           element : (
//             <Protected authentication = {false}>
//               <MatchContextProvider>
//               <Match/>
//               </MatchContextProvider>
//             </Protected>
//           )
//         },
//         {
//           path: '/contact',
//           element: <Contact />
//         },
//         {
//           path: '/about',
//           element: <About/>
//         },
//         {
//           path: '/profile',
//           element: (<Protected authentication = {true}>
//             <Profile/>
//             </Protected>)
//         }

//       ]
//     }
//   ])

  export default router;