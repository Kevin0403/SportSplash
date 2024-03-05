import React, { useState } from 'react';
import {NameCard} from '../index'

function SelectGames() {
    const games = [
        {
          id : 1,
          value : "Cricket",
          to : "Cricket"
        },
        {
          id : 2,
          value : "Football",
          to : "Football"
        },
        {
          id : 3,
          value : "Basketball",
          to : "Basketball"
        },
        {
          id : 4,
          value : "Volleyball",
          to : "Volleyball"
        },
        {
          id : 5,
          value : "Badminton",
          to: "Badminton"
        },
        {
          id : 6,
          value : "Table Tennis",
          to : "TableTennis"
        },
        {
          id : 7,
          value : "Kabaddi",
          to : "Kabaddi"
        },
        {
          id : 8,
          value : "Hockey",
        }
        
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