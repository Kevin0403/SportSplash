import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import authService from '../../connection/auth'
import MatchCard from '../MatchCard'
import Loading from '../Loading'


function ShowMatches({
    matchType,
}) {

    const [matches, setMatches] = useState(null)

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


  return matches ? (
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
  ) : (
    <Loading/>
  )
}

export default ShowMatches;