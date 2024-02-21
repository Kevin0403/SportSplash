import React from 'react'
import { Outlet } from 'react-router-dom';
import { CommonHeader } from '../components';

function Tournaments() {
    const menuItems = [
        {
          name: "Cricket",
          to: "cricket",
        },
        {
          name: "Football",
          to: "football",
        },
        {
          name: "Badminton",
          to: "badminton",
        },
        {
          name: "Tennis",
          to: "tennis",
        },
        {
          name: "Basketball",
          to: "basketball",
        }
      ];
  return (
    <div className='w-full'>
        <CommonHeader menuItems={menuItems}/>
      <div className=' '>
          <Outlet/>
      </div>
    </div>
  )
}

export default Tournaments