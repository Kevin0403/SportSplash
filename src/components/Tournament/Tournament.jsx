import React, { useContext } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import {Button, CommonHeader} from '../index'
import { TournamentContext } from '../../context/TournamentContextProvider'
import { Delete } from 'lucide-react';
import authService from '../../connection/auth';
import { toast } from 'sonner';

function Tournament({
    tournamentName
}) {

    const {isAdmin, tournament} =useContext(TournamentContext);
    const navigate = useNavigate();

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

    const deleteTournament = async () => {
        try{
        if(window.confirm('Are you sure you want to delete this tournament?'))
            await authService.deleteTournament(tournament.id);
            toast.success('Tournament deleted successfully');
            navigate('/');
        }
        catch(err){
            toast.error(err.message);
        }
        
    }

    return (
        <div>
            <div className=' flex pt-20 pb-10 items-center h-56 bg-[url("/banner.jpg")] bg-no-repeat bg-cover'>
                
                <div className='flex flex-row ms-6 backdrop-blur-sm align-bottom rounded-md'>
                    <div className='p-2 font-bold text-white'>
                        <h1 className=' text-4xl'>{tournamentName}</h1>
                    </div>
                    {/* Delete tournament button */}
                    {isAdmin && (
                        <div className='p-2'>
                            <Button onClick={deleteTournament} className=' text-lg bg-transparent border-none text-red-500 hover:bg-transparent hover:text-red-800'>
                                <Delete scale={25}/>
                            </Button>
                        </div>
                    )}
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