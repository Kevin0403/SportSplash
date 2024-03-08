import React, { useContext, useState } from "react";
import { Tournament as TournamentComponent } from "../components";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../connection/auth";
import { TournamentContext } from "../context/TournamentContextProvider";

import { toast } from "sonner"
import Loading from "../components/Loading";

function Tournament() {
  const [data, setData] = useState(null);
  const isAdmin = useContext(TournamentContext).isAdmin;
  const userData = useSelector((state) => state.auth.userData);
  const { setTournament, setIsAdmin } = useContext(TournamentContext);
  const { tournamentId } = useParams();

  async function fetch() {
    try {
      const tournamentData = await authService.getTournament(tournamentId);
      setData(tournamentData);
      setTournament(tournamentData);
      if (userData.email === tournamentData.user.email) {
        setIsAdmin(true);
      }
    } catch (error) {
      throw error;
    }
  }

  //fetch data from database and call setData to set the data
  useEffect(() => {
    try {
      fetch();
    } catch (error) {
      toast.error(error);
    }

    // TODO : fetch data from database and set it using setData
    // setData({
    //   id : 1,
    //   tournamentName : "tournament1",
    //   description : "this is tournament1",
    // })
    // setIsAdmin(true)
  }, []);

  return data ? (
    <>
      <TournamentComponent {...data} />
      <div>
        <Outlet />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Tournament;
