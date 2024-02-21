import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../index";
import authService from '../../../connection/auth'
import { toast } from "react-toastify";
import { TournamentContext } from "../../../context/TournamentContextProvider";
import { Delete, DrumstickIcon, Recycle } from "lucide-react";

function MatchCard({match, setData}) {
  const isAdmin = useContext(TournamentContext).isAdmin;
  const { tournamentId } = useParams();

  

  const deleteMatch = async () => {
    try{
      const data = await authService.deleteBedmintanMatch(match.id)
      if(data){
        setData((data) => data.filter((data) => (data.id != match.id)))
        toast.success('Match Deleted Successfully')
      }
    }catch(error){
      toast.error(error.message)
    }
    
  }

  return (<>
  <section className="m-1 w-full max-w-2xl mx-auto bg-card rounded-xl shadow-md">

    {/* -<div className="flex justify-between w-64">
      <h1 className="text-2xl px-0">{match.team1.name}</h1>
      <h1 className="text-2xl font-bold px-3">0 - 0</h1>
      <h1 className="text-2xl px-0">{match.team2.name}</h1>
    </div> */}
    {isAdmin && (
      <div className=" w-max float-right m-0 p-0 h-1">
        <Button onClick={deleteMatch} className="h-6 m-0 p-0 bg-red-600 text-white">
          <Delete size={20} />
        </Button>

      </div>
    )}
    <h1 className="text-lg pr-6 p-1">{match.tournament.game.toLowerCase()}</h1>
    <Link
          to={`/match/${match.tournament.game}/${match.id}`}
        >
      <table className=" mx-4 w-min">
          <tr className="px-2">
            <td className="text-left px-4">
              <h1 className="text-lg font">{match.team1.name}</h1>
            </td>
            <td className="text-left px-4">
              <h1 className="text-2xl font-bold">{match.team1score}</h1>
            </td>
          </tr>
          <tr>
            <td className="text-left px-4">
              <h1 className="text-xl">{match.team2.name}</h1>
            </td>
            <td className="text-left px-4">
              <h1 className="text-2xl font-bold">{match.team2score}</h1>
            </td>
          </tr>
        </table>
        </Link>
    
    </section>
  </>  

  );
}

export default MatchCard;
