import React from 'react'
import {Card} from '../index'
import { useState, useEffect } from 'react'
import authService from '../../connection/auth'
import { toast } from 'sonner'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


function TournamentOverview() {
    const [data, setData] = useState(null);


  useEffect(() => {
    async function fetchData() {
      //TODO : fetch data from database
      try {
        const data = await authService.getTournaments();
        setData(data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    fetchData();
  }, []);
  return data ? (
    <ul className='flex flex-wrap justify-center'>
        {
            data.filter((tournament, index) => index < 5).map((tournament) => {
                return (
                    <li key={tournament.id} className="m-3">
                      <Card {...tournament} showName/>
                    </li>
                  );
            })
        }
        <li key = '-1' className=' mt-auto my-auto mx-2'>
            <Link to='/tournaments' className='text-center text-blue-500 font-semibold hover:text-blue-700'><h1>View All<ArrowRight className='inline'/></h1></Link>
        </li>
    </ul>
  ) : <Loading  />
}

export default TournamentOverview