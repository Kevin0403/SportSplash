import React from 'react'
import { Link } from 'react-router-dom'

function GameCard({
    game
}) {
  return (
    <Link to={`/create-tournament/${game.value}`} >
    <div className="bg-card p-10  rounded-lg shadow-md hover:bg-card-hover">
      <p className="font-bold text-xl">{game.value}</p>
    </div>
    </Link>
  )
}

export default GameCard