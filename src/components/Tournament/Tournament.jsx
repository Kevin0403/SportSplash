import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import {TournamentHeader} from '../index'

function Tournament({
    tournamentName,
    isAdmin
}) {

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
            <TournamentHeader/>

        </div>
    )
}

export default Tournament