import React, { useState } from 'react';
import {NameCard} from '../index'

function SelectGames() {
    const games = [
        
        
        {
          id : 1,
          value : "Badminton",
          to: "Badminton"
        },
        {
          id : 7,
          value : "Kabaddi",
          to : "Kabaddi"
        },
        
      ]

  return (
    <div className="flex flex-wrap gap-4 p-20 w-full h-max justify-center items-center">
      {games.map((game) => (
        <NameCard key={game.id} name={game} />
      ))}
    </div>
  );
}

export default SelectGames;