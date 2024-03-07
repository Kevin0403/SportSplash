import React from 'react'
import { Outlet } from 'react-router-dom';
import { CommonHeader } from '../components';

function Tournaments() {
    const menuItems = [
      {
        name: "All",
        to: "",
      },
        
        {
          name: "Badminton",
          to: "badminton",
        },
        {
          name: "Kabaddi",
          to: "kabaddi",
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