import React, { useState, useEffect, useContext } from "react";
import authService from "../../../connection/auth";
import { useParams } from "react-router-dom";
import { Button, Team } from "../../index";
import { toast } from "sonner"
import { TournamentContext } from "../../../context/TournamentContextProvider";

function Teams() {
  const { tournamentId } = useParams();
  const isAdmin = useContext(TournamentContext).isAdmin;

  const maxTeams = useContext(TournamentContext).tournament.teams;

  useEffect(() => {});
  
  const [data, setData] = useState();

  useEffect(() => {
    //TODO: check whether user is admin or not

    async function fetchData(id) {
      try{
        const teams = await authService.getTeams(id);
        setData(teams);
      }
      catch(error){
        toast.error(error)
      }
    }
    fetchData(tournamentId);

  }, []);

  // to add a team if possible
  function addTeam(){
    setData((data) => [...data, {name : "",isNew : true, id : data.length + 1}])
  }
  


  return (
    data ? (
      <div>
      <ol className="w-full px-6">
        {data.length > 0 ? data.map((team) => (
          <li key={team.id} className=" w-full">
            {/* TODO : write this part after team component is created don't forget to pass isAdmin as args.*/}
            <Team {...team} setData={setData} isadmin={isAdmin} />
          </li>
        )) : (
          <div className='w-full text-center text-2xl start-4 '>
            <h1 className=' text-warning'>No Teams Found</h1>
          </div>
        )}
      </ol>
      {( data.length < maxTeams) && isAdmin && (
        <div className="text-center"> 
          <Button onClick= {addTeam} className=" max-w-56">Add Team</Button>
        </div>
      )}
    </div>
    ) : (
      <div className='w-full text-center text-2xl start-4 '>
        <h1 className=' text-warning'>Loading from database</h1>
      </div>
    )
  );
}

export default Teams;
