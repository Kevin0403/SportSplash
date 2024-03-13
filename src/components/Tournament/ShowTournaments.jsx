import React from 'react'
import { Card} from '../index' 
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  authService  from '../../connection/auth'
import { toast } from 'sonner'
import Loading from '../Loading';


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
  return data ?  (
    <div>
        <ul className='flex flex-wrap justify-center space-x-8 '>
        {data && 
         (game ?  data.filter((tournament) => tournament.game === game.toUpperCase())?.map(
                (tournament) => {
                    return (
                      <li key={tournament.id} className='m-3'>
                        <Card {...tournament}/>
                      </li>
                    )
                }
            ) :
            data.map(
                (tournament) => {
                  return (
                    <li key={tournament.id} className='m-3'>
                      <Card {...tournament} showName/>
                    </li>
                  )
                }
            ))
        }
        </ul>
    </div>
  ) : (
    <Loading/>
  )
}

export default ShowTournaments