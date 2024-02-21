import React from 'react'
import { Link } from 'react-router-dom'


function MatchCard({
    match
}) {
  return (

    <div className="bg-white transition-all hover:bg-card-hover hover:text-card-hover hover:border-b-card-hover card h-full shadow border rounded-xl border-b-8 border-b-card cursor-pointer p-3 space-y-2">
        <Link
          to={`/match/${match.tournament.game}/${match.id}`}
        >
       
        <div className="py-3  border-b-2">
            <h1 className="font-bold">{match.tournament.tournamentName}</h1>
            {/* <p class="font-light">{match}</p> */}
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
     </div>
  )
}

export default MatchCard