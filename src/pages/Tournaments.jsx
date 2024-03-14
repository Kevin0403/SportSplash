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
        },
        {
          name: "Table Tennis",
          to: "tabletennis",
        },
        {
          name: "Volleyball",
          to: "volleyball",
        },
      ];
  return (
    <div className='flex flex-col'>
        <CommonHeader menuItems={menuItems}/>
      <div className=' '>
          <Outlet/>
      </div>
    </div>
  )
}

export default Tournaments