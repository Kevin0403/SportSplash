import React, { useState } from 'react'
import { Tournament as TournamentComponent } from '../components'
import { Outlet, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function Tournament() {
  const [data, setData ] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  const { id } = useParams()

  //fetch data from database and call setData to set the data
  useEffect(() => {
    setData({
      id :1,
      name : 'DDu Premear leage'
    })
    setIsAdmin(true)
  }, []) 

  return data ? (
    <>
    <TournamentComponent isAdmin = {isAdmin} {...data} />
    <div>
        <Outlet isAdmin = {isAdmin} />
    </div>
    </>
  ) : (
    <div>Loading</div>
  )
}

export default Tournament