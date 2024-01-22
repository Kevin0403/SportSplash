import React, { useState, useEffect } from "react";
import authService from "../../connection/auth";
import { useParams } from "react-router-dom";
import { Button, Team } from "../index";

function Teams({isAdmin}) {
  const { id } = useParams();

  useEffect(() => {});

  const [data, setData] = useState([]);

  useEffect(() => {
    //TODO: check whether user is admin or not

    // async function fetchData(id) {
    //   const data = await authService.getTeams(id);
    //   setTeams(data);
    // }
    // fetchData(id);

    setData([
      {
        id: 1,
        name: "team1",
      },
      {
        id: 2,
        name: "team2",
      },
      {
        id: 3,
        name: "team3",
      },
    ]);

  }, []);

  // to add a team if possible
  function addTeam(){
    setData((data) => [...data, {name : "",isNew : true, id : data.length + 1}])
  }


  return (
    <div>
      <ol className="w-full px-6">
        {data.map((team) => (
          <li key={team.id} className=" w-full">
            {/* TODO : write this part after team component is created don't forget to pass isAdmin as args.*/}
            <Team {...team} isadmin={isAdmin} />
          </li>
        ))}
      </ol>
      <Button onClick= {addTeam}>Add Team</Button>
    </div>
  );
}

export default Teams;
