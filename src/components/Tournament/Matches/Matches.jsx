import React, { useEffect, useState } from 'react'
import { MatchCard } from '../../index'
import authService from '../../../connection/auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Matches() {

  const [data, setData] = useState([])
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

  return data.length ? (
    <div>
      <ul className="flex ">
        {data.map((match) => {
          return (
            <li key={match.id}>
              <MatchCard match = {match} setData = {setData} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <h1 className="w-full h-full text-center">Loading</h1>
  );
}

export default Matches