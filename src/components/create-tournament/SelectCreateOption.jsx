import React from 'react'
import { NameCard} from '../index'

function SelectCreateOption() {
    const Option = [
        {
          id : 1,
          value : "Create Match",
          to : "match"
        },
        {
          id : 2,
          value : "Create Tournament",
          to: "tournament"
        }
      ]

  return (
    <div className="flex flex-wrap gap-4 p-20 w-full h-max justify-center items-center">
      {Option.map((game) => (
        <NameCard key={game.id} name={game} linkPrefix={'create'}/>
      ))}
    </div>
  );
}

export default SelectCreateOption