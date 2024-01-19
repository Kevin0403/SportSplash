import React from 'react'
import { Tournament as TournamentComponent } from '../components'
import { Outlet } from 'react-router-dom'

function Tournament() {
  return (
    <>
    <TournamentComponent />
    <div>
        <Outlet />
    </div>
    </>
  )
}

export default Tournament