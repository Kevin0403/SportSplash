import React from 'react'
import { Outlet } from 'react-router-dom'
import MatchRoutes from '../layouts/MatchRoutes'
import { useParams } from 'react-router-dom'

function Match() {

  const {game} = useParams();

  return (
      MatchRoutes[game]
     )
}

export default Match