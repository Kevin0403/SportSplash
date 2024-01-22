import React, { useState } from 'react'
import { Tournament as TournamentComponent } from '../components'
import { Outlet, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function Tournament() {

  const [data, setData ] = useState(useSelector((state) => state.tournament.data))
  const [isAdmin, setIsAdmin] = useState(useSelector((state) => state.tournament.isAdmin))

  const { id } = useParams()

  //fetch data from database and call setData to set the data
  useEffect(() => {
    // TODO : fetch data from database and set it using setData
    setData({
      id : 1,
      tournamentName : "tournament1",
      description : "this is tournament1",
    })
    setIsAdmin(true)

  }, []) 

  return data ? (
    <>
    <TournamentComponent isAdmin = {isAdmin} {...data} />
    <div>
        <Outlet />
    </div>
    </>
  ) : (
    <div>Loading</div>
  )
}

export default Tournament