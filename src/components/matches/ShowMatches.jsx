import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import authService from '../../connection/auth'
import MatchCard from '../MatchCard'


function ShowMatches({
    matchType,
}) {

    const [matches, setMatches] = useState([])

    const fetchMatches = async (type) => {
        try {
            const matches = await authService.getAllMatches(matchType)
            setMatches(matches)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchMatches(matchType)
    }, [])


  return (
   <>
        <ul className=' flex flex-wrap justify-around mt-3'>
        {
            matches && matches.filter((match) => match.status === matchType.toUpperCase()).map((match, index) => {
                return (
                    <li key={index} className='  m-2'>
                        <MatchCard match={match}/>
                    </li>
                )
            })
        }
        </ul>
   </>
  )
}

export default ShowMatches;