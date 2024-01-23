import React, { useState } from "react";
import { Tournament as TournamentComponent } from "../components";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../connection/auth";
import {
  clear,
  setData as setTournamentData,
  setIsAdmin,
} from "../store/tournamentslice";
import { toast } from "react-toastify";

function Tournament() {
  const [data, setData] = useState(null);
  const isAdmin = useSelector((state) => state.tournament.isAdmin);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const { tournamentId } = useParams();

  async function fetch() {
    try {
      dispatch(clear());
      const tournamentData = await authService.getTournament(tournamentId);
      setData(tournamentData);
      dispatch(setTournamentData(tournamentData));
      if (userData.email === tournamentData.user.email) {
        dispatch(setIsAdmin(true));
      }
    } catch (error) {
      toast.error(error);
    }
  }

  //fetch data from database and call setData to set the data
  useEffect(() => {
    fetch();

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
      <TournamentComponent isAdmin={isAdmin} {...data} />
      <div>
        <Outlet />
      </div>
    </>
  ) : (
    <div>Loading</div>
  );
}

export default Tournament;
