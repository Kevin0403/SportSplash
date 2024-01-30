import React, { useEffect, useState } from "react";
import { Button, Player } from "../../index";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import authService from "../../../connection/auth";

function Players({ id }) {
  const [data, setData] = useState();

  const isAdmin = useSelector((state) => state.tournament.isAdmin);

  const teamSize = useSelector((state) => state.tournament.data.teamSize)
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
            <h1 className=' text-warning'>No Teams Found</h1>
          </div>
        )}
      </ul>
      {(data.length < teamSize) && isAdmin && (
        <Button onClick={addPlayer} className=" w-max m-1">
          Add Player
        </Button>
      )}
    </div>
  ) : (
    <div className='w-full text-center text-2xl start-4 '>
      <h1 className=' text-warning'>Loading</h1>
    </div>
  );
}

export default Players;
