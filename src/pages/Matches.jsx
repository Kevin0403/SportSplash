import React from 'react'
import { Outlet } from 'react-router-dom'
import { CommonHeader } from '../components'

function Matches() {
    const menuItems = [
        {
          name: "Ongoing",
          to: "ongoing",
        },
        {
          name: "Upcoming",
          to: "upcoming",
        },
        {
          name: "Completed",
          to: "completed",
        },
      ];
  return (
    <div>
      <div className=' sticky top-11'>
        <CommonHeader menuItems={menuItems} className = ''/>
      </div>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default Matches