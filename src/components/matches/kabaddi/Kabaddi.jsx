import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchContext } from "../../../context/MatchContextProvider";
import {Button} from '../../index'
import { toast } from "sonner"
import Popup from "./Popup";
import ScoreBoard from "./ScoreBoard";
import Loading from "../../Loading";


function Kabaddi() {
  const { matchId } = useParams();
  const { isAdmin, match, setMatch, socket, updateMatch } =
    useContext(MatchContext);
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [status, setStatus] = useState(false);
  const [onClose, setOnClose] = useState(false);
  const [team, setTeam] = useState(null);


  useEffect(() => {
    if (socket) {
      socket.connect({}, () => {
        socket.subscribe(`/public/kabaddiScoreUpdates/${matchId}`, (message) => {
          const score = JSON.parse(message.body).body;
          console.log(score)
          setTeamA(score.team1score);
          setTeamB(score.team2score);
          if(score.status !== status){
            setStatus(score.status)
          }
          if (score.status === "COMPLETED") {
            toast.success("Match Completed \n Winner is " + score.winner.name);
          }
          setMatch((prev) => ({ ...prev, ...score }));
        });
      });
    }
  }, [socket]);

  useEffect(() => {
    if (match) {
      setTeamA(match.team1score);
      setTeamB(match.team2score);
      if(status !== match.status){
        setStatus(match.status)
      }
    }
  }, [match]);

  useEffect(() => {
    updateMatch();
  }, [status]);

  function send(data) {
    socket.send(
      `/app/updateKabaddiScore/${matchId}`,
      {},
      JSON.stringify({...data, status: status})
    );
    setOnClose(false);
  }

  async function openPopup(e) {
    await setTeam(e.target.name);
    setOnClose(true);
  }


  function startMatch() {
    if (
      confirm(
        `Are you sure you want to start the match ${
          status === "ONGOING" ? "" : "again "
        }?`
      )
    ) {
      const score = {
        status: 'ONGOING'
      };
      
      socket.send(
        `/app/startKabaddiMatch/${matchId}`,
        {},
        JSON.stringify(score)
      );
    }
  }

  useEffect(() => {
    updateMatch();
  }, [status]);

  function endMatch() {
    if (
      confirm(
        `Are you sure you want to end the match ${
          status === "ONGOING" ? "" : "again "
        }?`
      )
    ) {
      const score = {
        status: 'COMPLETED'
      };
      socket.send(
        `/app/endKabaddiMatch/${matchId}`,
        {},
        JSON.stringify(score)
      );
    }
  }

  function undoMatch() {
    if (confirm(`Are you sure you want to undo the match?`)) {
      socket.send(
        `/app/updateKabaddiScore/${matchId}`,
        {},
        JSON.stringify({ undo : true })
      )
    }
  }


  return match ? (
    <div className=" p-4">
      {/* Dispaly tournament name and details */}
      <div className="text-2xl mb-2">
        <h1 className="text-center ">Tournament : <span className="text-gray-500">{match.tournament.tournamentName}</span></h1>
      </div>
      {
            status === "UPCOMING" &&
            <div className=" text-lg text-red-600 p-2 mb-2 rounded-md text-center">
              Math is not started yet
              </div>
          }
          
      {onClose && <Popup setOnClose={setOnClose} team={team} send={send} />}
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-2">{match.team1?.name}</div>
          <div className="text-4xl font-bold">{teamA}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold mb-2">{match.team2?.name}</div>
          <div className="text-4xl font-bold">{teamB}</div>
        </div>
      </div>
      <div className="flex justify-around mt-8">
        {/* Shows the players here */}
      </div>
      {isAdmin && (
        <div>
          <div className="flex justify-around mt-8">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            name="1"
            disabled={status !=  "ONGOING"}
            onClick={openPopup}
          >
            Add point to {match.team1?.name}
          </Button>
          <Button onClick={status != "ONGOING" ? startMatch : endMatch}>
            {status === "ONGOING"? "End Match" : status === "UPCOMING" ? "Start Match" : "Restart"}
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4 "
            name="2"
            disabled={status !=  "ONGOING"}
            onClick={openPopup}
          >
            Add point to {match.team2?.name}
          </Button>
        </div>
        <div className="flex justify-around mt-8">
          <Button
            disabled={status !=  "ONGOING"}
            onClick={undoMatch}
          >
            Undo
          </Button>
          </div>
        </div>
      )}


      <div className=" inline-flex justify-center mt-4 w-full">
        <ScoreBoard {...match} />
      </div>
      <div className="mt-8 bg-gray-200 p-4">
        <div className="text-xl font-bold mb-2">Key Points</div>
        <div className="team-key-points">
          {
            status === "UPCOMING" &&
            <div className="bg-blue-200 text-red-600 p-2 mb-2 rounded-md">
              Math is not started yet
              </div>
          }
          <div className="bg-blue-200 p-2 mb-2 rounded-md">
            Match {status == "UPCOMING" ? 'will' : ""} start{status == "UPCOMING" ? "" : "ed"} at {match.startTime}
          </div>
          {match.status === "COMPLETED" && (
            <div className="bg-blue-200 p-2 mb-2 rounded-md">
              Match completed at {match.endTime}
            </div>
          )}
          {match.status === "COMPLETED" && (
            <div className="bg-blue-200 p-2 mb-2 rounded-md">
              Winner is{" "}
              <span className="font-bold text-red-600">
                {match.winner.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Kabaddi;
