import React from 'react'
import { Link } from 'react-router-dom'
import {BackgroundGradient} from '../style'


function MatchCard({
    match
}) {
  return (
    
    <BackgroundGradient className="w-72 bg-white transition-all hover:bg-card-hover hover:text-card-hover hover:border-b-card-hover card h-full shadow border rounded-xl border-b-8 border-b-card cursor-pointer px-3 space-y-2 rounded-[22px] bg-white ">
    {/* <div className="w-72 bg-white transition-all hover:bg-card-hover hover:text-card-hover hover:border-b-card-hover card h-full shadow border rounded-xl border-b-8 border-b-card cursor-pointer p-3 space-y-2"> */}

        <Link
          to={`/match/${match.tournament.game}/${match.id}`}
        >
       
        <div className="py-3  border-b-2">
            <h1 className="font-bold text-center">{match.tournament.game} 
            </h1>


            <p class="font-light text-center">{match.tournament.tournamentName ? `(${match.tournament.tournamentName})` : `(Hosted by ${match.tournament.user?.fname})`}</p>
        </div>
        <div className="flex justify-between">
         <h1 className="font-bold text-gray-600">{match.team1.name}</h1>
         <h1 className="font-bold">{match?.team1score}</h1>
        </div>
        <div className="flex justify-between">
         <h1 className="font-bold text-gray-600">{match.team2.name}</h1>
         <h1 className="font-bold">{match?.team2score}</h1>
        </div>
        <div >
         {/* <p className="text-red-500">{match.status}</p> */}
         <p className="text-green-800">{match.status}</p>
        </div>
        </Link>
     {/* </div> */}
    </BackgroundGradient>
  )
}

export default MatchCard