import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../index";
import authService from '../../../connection/auth'
import { toast } from "react-toastify";

function MatchCard({match, setData}) {
  const isAdmin = useSelector((state) => state.tournament.isAdmin);
  const { tournamentId } = useParams();

  const deleteMatch = async () => {
    try{
      const data = await authService.deleteBedmintanMatch(match.id)
      if(data){
        setData((data) => data.filter((data) => (data.id != match.id)))
        toast.success('Match Deleted Successfully')
      }
    }catch(error){
      console.log(error)
      toast.error(error.message)
    }
    
  }

  return (<>
    <Link to={`/match/${match.id}`}>
    <div className="w-[300px] rounded-md border bg-card m-1">
      {/* <img
        src={`/banner.png`}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      /> */}
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {match.team1.name}
        </h1>
        <p className="m-1 text-sm ">vs</p>
        <h1 className="inline-flex items-center text-lg font-semibold">
          {match.team2.name}
        </h1>
        <p className="mt-1 text-sm ">
          {`Start Date :- ${match.startDate}`}
        </p>
        <p className="mt-1 text-sm ">
          {`Start Date :- ${match.startTime}`}
        </p>
        {isAdmin && (
          <Link to={`/tournament/${tournamentId}/create-match`} state={match}>
            <Button type="button">Update</Button>
          </Link>
        )}

        {isAdmin && <Button type="button" onClick = {deleteMatch}>Delete</Button>}
      </div>
    </div>
        </Link>

  </>  

  );
}

export default MatchCard;
