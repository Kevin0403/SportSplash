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
            setMatches( matches.filter((match) =>matchType ?  match.status === matchType.toUpperCase() : true))
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        setMatches(null)
        fetchMatches(matchType)
    }, [matchType])


  return matches ? (
   <>
        <ul className=' flex flex-wrap justify-around mt-3'>
        {
            matches && matches.length > 0 ? matches.map((match, index) => {
                return (
                    <li key={index} className='  m-2'>
                        <MatchCard match={match}/>
                    </li>
                )
            })  : (
                <h1 className='text-lg font-bold text-center text-red-500'>No Matches Found</h1>
            )
        }
        </ul>
   </>
  ) : (
    <Loading/>
  )
}

export default ShowMatches;