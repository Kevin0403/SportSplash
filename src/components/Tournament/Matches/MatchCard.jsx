import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../index";
import authService from '../../../connection/auth'
import { toast } from "sonner"
import { TournamentContext } from "../../../context/TournamentContextProvider";
import { Delete, DrumstickIcon, Recycle } from "lucide-react";

function MatchCard({match, setData}) {
  const {isAdmin, tournament} = useContext(TournamentContext);
  const { tournamentId } = useParams();

  

  const deleteMatch = async () => {
    try{
      const data = await authService.deleteMatch(match.id, tournament.game)
      if(data){
        setData((data) => data.filter((data) => (data.id != match.id)))
        toast.success('Match Deleted Successfully')
      }
    }catch(error){
      toast.error(error.message)
    }
    
  }

  return (
    <div className="w-72 bg-white transition-all hover:bg-card-hover hover:text-card-hover hover:border-b-card-hover card h-full shadow border rounded-xl border-b-8 border-b-card cursor-pointer px-3 pb-3 space-y-2">
   
    {isAdmin && <div className="w-full flex justify-end border-b-2 cursor-default ">
        {/* <p class="font-light">{match}</p> */}
        
          <div className=" w-max right ">
        <Button onClick={deleteMatch} className="btn-sm border-none bg-transparent hover:bg-transparent text-red-500 ">
          <Delete size={25} />
        </Button>

      </div>
    
    {/* <h1 className="font-bold">{match.tournament.game}</h1> */}
    </div>}
            <Link
              to={`/match/${match.tournament.game}/${match.id}`}
            >
    <div className="flex justify-between">
     <h1 className="font-bold text-gray-600">{match.team1.name}</h1>
     <h1 className="font-bold">{match?.team1score}</h1>
    </div>
    <div className="flex justify-between">
     <h1 className="font-bold text-gray-600">{match.team2.name}</h1>
     <h1 className="font-bold">{match?.team2score}</h1>
    </div>
    <div >
     {/* <p className="text-red-500">{match.status}</p> */}
     <p className="text-green-800">{match.status}</p>
    </div>
    </Link>
 </div>
  )
  

  // return (<>
  // <section className="m-1 w-full max-w-2xl mx-auto bg-card rounded-xl shadow-md">
  //   {isAdmin && (
  //     <div className=" w-max float-right m-0 p-0 h-1">
  //       <Button onClick={deleteMatch} className="h-6 m-0 p-0 bg-red-600 text-white">
  //         <Delete size={20} />
  //       </Button>

  //     </div>
  //   )}
  //   <h1 className="text-lg pr-6 p-1">{match.tournament.game.toLowerCase()}</h1>
  //   <Link
  //         to={`/match/${match.tournament.game}/${match.id}`}
  //       >
  //     <table className=" mx-4 w-min">
  //         <tr className="px-2">
  //           <td className="text-left px-4">
  //             <h1 className="text-lg font">{match.team1.name}</h1>
  //           </td>
  //           <td className="text-left px-4">
  //             <h1 className="text-2xl font-bold">{match.team1score}</h1>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td className="text-left px-4">
  //             <h1 className="text-xl">{match.team2.name}</h1>
  //           </td>
  //           <td className="text-left px-4">
  //             <h1 className="text-2xl font-bold">{match.team2score}</h1>
  //           </td>
  //         </tr>
  //       </table>
  //       </Link>
    
  //   </section>
  // </>  

  // );
}

export default MatchCard;
