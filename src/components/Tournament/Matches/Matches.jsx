import React, { useEffect, useState } from 'react'
import { MatchCard } from '../../index'
import authService from '../../../connection/auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Matches() {

  const [data, setData] = useState()
  const {tournamentId} = useParams()

  

  useEffect(()=>{
      async function fetch(id){
        try {
          const matches = await authService.getMatches(id)
          setData(matches)
        } catch (error) {
      toast.error(error.message)
        }
      }
      fetch(tournamentId)
  }, [])

  return data ? (
    <div>
      <ul className="flex gap-2 flex-wrap">
        {data.length > 0 ? data.map((match) => {
          return (
            <li key={match.id} className=' w-max'>
              <MatchCard match = {match} setData = {setData} />
            </li>
          );
        }) : (
          <div className='w-full text-center text-2xl start-4 '>
            <h1 className=' text-warning'>No Matches Found</h1>
          </div>
        )}
      </ul>
    </div>
  ) : (
    <h1 className="w-full h-full text-center">Loading</h1>
  );
}

export default Matches