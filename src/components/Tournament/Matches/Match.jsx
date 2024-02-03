import React, {useEffect, useState} from 'react'
import {Players} from '../../index'
import { toast } from 'react-toastify';
import authService from '../../../connection/auth';
import { useParams } from 'react-router-dom';

function Match() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [data, setData] = useState(null);
  const {matchId} = useParams();
  const [socket, setSocket] = useState(null);

  const players = {
    teamA: ['Player 1', 'Player 2', 'Player 3'],
    teamB: ['Player 4', 'Player 5', 'Player 6'],
  };

  useEffect(() => {
    // async function fetch() {
    //   try {
    //     const data = await authService.getBedmintanMatch(matchId);
    //     setData(data);
    //     const socket = await authService.getSocket();
    //     setSocket(socket);
    //     socket.on('match', (data) => {
    //       if (data.matchId === matchId) {
    //         setTeamA(data.teamA);
    //         setTeamB(data.teamB);
    //       }
    //     });
    //   } catch (error) {
    //     toast.error(error.message)
    //   }
    // }
    // fetch();
    setData({
      team1: {
        name: 'Team A'
      },
      team2: {
        name: 'Team B'
      }
    });
  }, []);

  return data ? (
    <div className=" p-4">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-2">{data.team1?.name}</div>
          <div className="text-4xl font-bold">{teamA}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-2">{data.team2?.name}</div>
          <div className="text-4xl font-bold">{teamB}</div>
        </div>
      </div>
      <div className="flex justify-around mt-8">
        {/* Shows the players here */} 
      </div>
      <div className="mt-4">
        {/* <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Add point to Team A</button> */}
        {/* <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Add point to Team B</button> */}
      </div>
      <div className="mt-8 bg-gray-200 p-4">
        <div className="text-xl font-bold mb-2">Key Points</div>
        <div className="team-key-points">
          <div className="bg-blue-200 p-2 mb-2 rounded-md">Match started at 3:00 PM</div>
          <div className="bg-blue-200 p-2 mb-2 rounded-md">Key point for Team A</div>
          <div className="bg-blue-200 p-2 mb-2 rounded-md">Key point for Team B</div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Match