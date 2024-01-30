import React, { useState } from 'react';
import GameCard from './GameCard';

function Games() {
    const games = [
        {
          id : 1,
          value : "Cricket"
        },
        {
          id : 2,
          value : "Football"
        },
        {
          id : 3,
          value : "Basketball"
        },
        {
          id : 4,
          value : "Volleyball"
        },
        {
          id : 5,
          value : "Badminton"
        },
        {
          id : 6,
          value : "Table Tennis"
        }
        
      ]

  return (
    <div className="flex flex-wrap gap-4 p-20 w-full h-max justify-center items-center">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default Games;