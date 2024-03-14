import React from 'react'
import MatchCard from '../MatchCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import authService from '../../connection/auth';
import Loading from '../Loading';


function UserMatches() {

    const user = useSelector((state) => state.auth.userData);
    const [match, setMatch] = useState(null);

    useEffect(() => {
        if(user){
            const fetchMatches = async (userId) => {
                try {
                    const data = await authService.getUserMatches(userId);
                setMatch(data);
                } catch (error) {
                    throw error;
                }
            }
            try {
                
                fetchMatches(user.email);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }, [user])

  return match ?  (
    <div>
        <ul className='flex flex-wrap justify-center'>
        {
            match.map((match, index) => (
                <li key={index} className='m-1'>
                    <MatchCard match={match}/>
                </li>
            ))
        }
        </ul>
    </div>
  ) : (<Loading/>)
}

export default UserMatches