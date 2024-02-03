import React from 'react'
import { Link } from 'react-router-dom'

function NameCard({
    name,
    linkPrefix
}) {
  return (
    <Link to={`/${linkPrefix}/${name.to}`} >
    <div className="bg-card p-10  rounded-lg shadow-md hover:bg-card-hover">
      <p className="font-bold text-xl">{name.value}</p>
    </div>
    </Link>
  )
}

export default NameCard