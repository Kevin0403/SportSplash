import React from 'react';
import { BackgroundGradient } from '../../../style';

function ScoreBoard({
    team1,
    raidPoints1,
    tacklePoints1,
    technicalPoints1,
    bonusPoints1,
    alloutPoints1,
    team2,
    raidPoints2,
    tacklePoints2,
    technicalPoints2,
    bonusPoints2,
    alloutPoints2
}) {
  return (
    <BackgroundGradient opacity={20}>
    <div className="w-max scoreboard bg-gray-100 p-4 rounded-md shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">Match Scoreboard</h2>
      <table className="w-max mx-auto border-collapse bg-card-header-hover    ">
        <thead >
          <tr className="bg-navbar">
            <th className="border p-2 text-center">Type</th>
            <th className="border p-2 text-center lg:px-6">{team1.name}</th>
            <th className="border p-2 text-center lg:px-6">{team2.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">Raid Points</td>
            <td className="border p-2 text-center lg:px-6">{raidPoints1}</td>
            <td className="border p-2 text-center lg:px-6">{raidPoints2}</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">Tackle Points</td>
            <td className="border p-2 text-center lg:px-6">{tacklePoints1}</td>
            <td className="border p-2 text-center lg:px-6">{tacklePoints2}</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">Technical Points</td>
            <td className="border p-2 text-center lg:px-6">{technicalPoints1}</td>
            <td className="border p-2 text-center lg:px-6">{technicalPoints2}</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">Bonus Points</td>
            <td className="border p-2 text-center lg:px-6">{bonusPoints1}</td>
            <td className="border p-2 text-center lg:px-6">{bonusPoints2}</td>
          </tr>
          <tr>
            <td className="border p-2 text-center">All Out Points</td>
            <td className="border p-2 text-center lg:px-6">{alloutPoints1}</td>
            <td className="border p-2 text-center lg:px-6">{alloutPoints2}</td>
          </tr>
          <tr className='bg-card-hover'>
            <td className="border p-2 text-center ">Total Points</td>
            <td className="border p-2 text-center lg:px-6">{raidPoints1 + tacklePoints1 + technicalPoints1 + bonusPoints1 + alloutPoints1}</td>
            <td className="border p-2 text-center lg:px-6">{raidPoints2 + tacklePoints2 + technicalPoints2 + bonusPoints2 + alloutPoints2}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </BackgroundGradient>
  );
}

export default ScoreBoard;
