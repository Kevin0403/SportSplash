import React, { useEffect } from "react";
import SockJS from "sockjs-client/dist/sockjs";
import Stomp from "stompjs";
import authService from "../connection/auth";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const MatchContext = React.createContext();

function MatchContextProvider({ children }) {
  const [match, setMatch] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [socket, setSocket] = React.useState(null);
  const { matchId, game } = useParams();
  const user = useSelector((state) => state.auth.userData);


  const updateMatch = async() => {
    const data = await authService.getMatch(matchId, game)
    if(data){
      setMatch(data)
    }
  }

  useEffect(() => {
    async function fetch() {
      try {
        await updateMatch;

        const socket = await authService.getSocket();
        const stompClient = await Stomp.over(socket);
        // stompClient.debug = null;  // disable debug logs
        setSocket(stompClient);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetch();
    
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    
    if (user &&match && match.tournament.user.email === user.email) {
      setIsAdmin(true);
    }
  }, [match, user]);

  return (
    <MatchContext.Provider
      value={{
        match,
        setMatch,
        isAdmin,
        setIsAdmin,
        socket,
        updateMatch
      }}
    >
      {children}
    </MatchContext.Provider>
  );
}

export { MatchContext, MatchContextProvider };
