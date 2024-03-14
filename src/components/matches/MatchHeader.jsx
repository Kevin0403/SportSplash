import React from 'react'

function MatchHeader({
    match
}) {
  return (
    <div className="text-xl mb-2">
        <h1 className="text-center "><span className=" ">{match.tournament.tournamentName || `Hosted By ${match.tournament.user.fname} ${match.tournament.user.lname}`}</span></h1>
      </div>
  )
}

export default MatchHeader