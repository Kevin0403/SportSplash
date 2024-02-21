import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {CommonHeader} from '../index'

function Tournament({
    tournamentName,
    isAdmin
}) {

    const menuItems = [
        {
          name: "Teams",
          to: "teams",
        },
        {
          name: "Matches",
          to: "matches",
        },
        {
          name: "Create-Match",
          to: "create-match",
        },
      ];

    return (
        <div>
            <div className=' flex pt-20 pb-10 items-center h-56 bg-[url("/banner.jpg")] bg-no-repeat bg-cover'>
                <div className='flex flex-row-reverse ms-6 backdrop-blur-sm align-bottom rounded-md'>
                    <div className='p-2 font-bold text-white'>
                        <h1 className=' text-4xl'>{tournamentName}</h1>
                    </div>
                    {/* <div className='m-1 shadow-md h-20 w-20 bg-gray-500 '>
                        <img src='/SportSplash.png'  alt='home' />
                    </div> */}
                </div>
            </div>
            <CommonHeader menuItems={menuItems}/>

        </div>
    )
}

export default Tournament