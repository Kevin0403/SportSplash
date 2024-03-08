import React, { useContext, useEffect, useState } from "react";
import { Button, Player } from "../../index";
import { useSelector } from "react-redux";
import { toast } from "sonner"
import authService from "../../../connection/auth";
import { TournamentContext } from "../../../context/TournamentContextProvider";
import Loading from "../../Loading";

function Players({ id }) {
  const [data, setData] = useState();

  const isAdmin = useContext(TournamentContext).isAdmin;

  const teamSize = useContext(TournamentContext).tournament.teamSize;
  // Fetch data of players and display it.
  useEffect(() => {
    async function fetchData(id) {
      try {
        const players = await authService.getPlayers(id);
        setData(players);
      } catch (error) {
        throw error
      }
    }
    try{

      fetchData(id);
    }catch(error){
      toast.error(error.message)
    }
  }, []);

  function addPlayer() {
    setData((data) => [
      ...data,
      {
        id: data.length + 1,
        name: "",
        isNew: true,
        team: {
          id: id,
        },
      },
    ]);
  }

  return data ? (
    <div>
      <ul>
        {/* TODO: Add content of players here */}
        {data.length > 0 ? data.map((player) => (
          <li key={player.id || 0}>
            <Player
              {...player}
              setData={setData}
              isAdmin={isAdmin}
              teamId={id}
            />
          </li>
        )) : (
          <div className='w-full text-center text-xl start-4 '>
            <h1 className=' text-warning'>No Players Found</h1>
          </div>
        )}
      </ul>
      {teamSize && (data.length < teamSize) && isAdmin && (
        <Button onClick={addPlayer} className=" w-max m-1">
          Add Player
        </Button>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default Players;
