import React from "react";

const TournamentContext = React.createContext();

function TournamentContextProvider({ children }) {
  const [tournament, setTournament] = React.useState({});
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <TournamentContext.Provider
      value={{
        tournament,
        setTournament,
        isAdmin,
        setIsAdmin
      }}
    >
      {children}
    </TournamentContext.Provider>
  );
}

export { TournamentContext, TournamentContextProvider };
