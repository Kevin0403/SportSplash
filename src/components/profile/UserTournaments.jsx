import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { useState } from 'react';
import { toast } from 'sonner';
import Card from '../Card';
import authService from '../../connection/auth';

function UserTournaments() {
    const user = useSelector((state) => state.auth.userData);
    const [tournament, setTournament] = useState(null);
    useEffect(() => {
        if(user){
            const fetchTournaments = async (userId) => {
                try {
                    const data = await authService.getTournaments(userId);
                setTournament(data);
                } catch (error) {
                    throw error;
                }
            }
            try {
                
                fetchTournaments(user.email);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }, [user])
  return tournament ? (
    <div>
        <ul className='flex flex-wrap justify-center'>
        {
            tournament.map((tournament, index) => (
                <li key={index} className='m-2'>
                    <Card {...tournament}/>
                </li>
            ))
        }
        </ul>
    </div>
  ) : (<Loading/>)
}

export default UserTournaments