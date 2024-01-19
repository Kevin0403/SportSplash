import React from 'react'
import { Outlet } from 'react-router-dom'
import {TournamentHeader} from '../index'

function Tournament() {

    return (
        <div>
            <div className=' flex pt-20 pb-10 items-center h-56 bg-[url("/SportSplash.png")] bg-no-repeat bg-cover'>
                <div className='flex flex-row-reverse ms-6 bg-orange-300 align-bottom rounded-md'>
                    <div className='p-2 font-bold'>
                        <h1 className=' text-4xl'>DDU Premiar Leage</h1>
                    </div>
                    <div className='m-1 shadow-md h-20 w-20 bg-gray-500 '>
                        <img src='/SportSplash.png'  alt='home' />
                    </div>
                </div>
            </div>
            <TournamentHeader/>

        </div>
    )
}

export default Tournament