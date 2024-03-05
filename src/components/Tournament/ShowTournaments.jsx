import React from 'react'
import { Card} from '../index' 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  authService  from '../../connection/auth'
import { toast } from 'react-toastify'


function ShowTournaments() {
const [data, setData] = useState(null);

  const game = useParams()?.game;
  

  useEffect(() => {
    async function fetchData() {
      //TODO : fetch data from database
      try {
        const data = await authService.getTournaments();
        setData(data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
        <ul className='flex flex-wrap justify-around '>
        {data && 
         (game ?  data.filter((tournament) => tournament.game === game.toUpperCase())?.map(
                (tournament) => {
                    return (
                      <li key={tournament.id}>
                        <Card {...tournament}/>
                      </li>
                    )
                }
            ) :
            data.map(
                (tournament) => {
                  return (
                    <li key={tournament.id}>
                      <Card {...tournament}/>
                    </li>
                  )
                }
            ))
        }
        </ul>
    </div>
  )
}

export default ShowTournaments