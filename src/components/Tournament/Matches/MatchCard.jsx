import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../index";
import authService from '../../../connection/auth'
import { toast } from "react-toastify";
import { TournamentContext } from "../../../context/TournamentContextProvider";

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
  <section className="m-1 w-full max-w-2xl p-6 mx-auto bg-card rounded-xl shadow-md flex flex-col gap-6">

    {/* <div className="flex justify-between w-64">
      <h1 className="text-2xl px-0">{match.team1.name}</h1>
      <h1 className="text-2xl font-bold px-3">0 - 0</h1>
      <h1 className="text-2xl px-0">{match.team2.name}</h1>
    </div> */}
      <table className="w-full">
          <tr>
            <td className="text-left">
              <h1 className="text-xl font">{match.team1.name}</h1>
            </td>
            <td className="text-left">
              <h1 className="text-2xl font-bold">{match.team1score}</h1>
            </td>
          </tr>
          <tr>
            <td className="text-left">
              <h1 className="text-xl">{match.team2.name}</h1>
            </td>
            <td className="text-left">
              <h1 className="text-2xl font-bold">{match.team2score}</h1>
            </td>
          </tr>
        </table>

      <div className="flex justify-center">
        <Link
          className=""
          to={`/match/${match.id}`}
        >
          <Button>View Full Match Details</Button>
        </Link>
      </div>
    </section>
  </>  

  );
}

export default MatchCard;
