import conf from "../../conf/conf";
import axios from "axios";
import SockJS from 'sockjs-client/dist/sockjs'; 

class Database {
  constructor() {
    this.databaseUrl = conf.databaseUrl;
    this.userTable = conf.userTable;
  }

  async login(email, password) {
    try {
      const userData = await axios.post(`${this.databaseUrl}/verifyUser`, {
        email,
        password,
      });

      (userData)

      if (userData.error) {
        throw new Error(userData.error);
      } else {
        if (userData.data.email) return userData.data;
        else throw new Error("User not found");
      }
    } catch (error) {
      throw error;
    }
  }

  // create user : that create and insert into user table

  async createUser(
    email,
    password,
    university,
    fname,
    lname,
    mobileno,
    ...rest
  ) {
    try {
      const userData = await axios
        .post(`${conf.databaseUrl}/signup`, {
          email,
          password,
          mobileno,
          university,
          fname,
          lname,
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw new Error(error.message);
        });

      if (userData.error) {
        throw new Error(userData.error);
      } else {
        return userData;
      }
    } catch (error) {
      throw error;
    }
  }

  // delete user : that delete user from user table

  async deleteUser(email, ...rest) {
    try {
      const userData = await axios
        .post(`${this.databaseUrl}/deleteUser`, {
          email,
          ...rest,
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (userData.error) {
        throw new Error(userData.error);
      } else {
        return userData;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // update user : that update user table

  async updateUser(email, password, university, ...rest) {
    try {
      const userData = await axios
        .post(`${this.databaseUrl}/updateUser`, {
          email,
          password,
          university,
          ...rest,
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (userData && userData.error) {
        throw new Error(userData.error && "Not able to send request");
      } else {
        return userData;
      }
    } catch (error) {
      throw error;
    }
  }

  // create tournament : that create and insert into tournament table
  async createTournament(tournamentName, game,  teamSize, startDate, endDate, user, teams) {
    try {

      const tournamentData = await axios
        .post(`${this.databaseUrl}/tournaments`, {
          user,
          tournamentName,
          game : game.toUpperCase(),
          teams,
          teamSize,
          startDate,
          endDate
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if ((tournamentData && tournamentData.error) || !tournamentData.user) {
        throw new Error(tournamentData.error && "Not able to send request");
      } else {
        return tournamentData;
      }
    } catch (error) {
      throw error;
    }
  }

  // get tournament from tournament id
  async getTournament(tournamentId) {
    try {
      const tournamentData = await axios
        .get(`${this.databaseUrl}/getTournament/${tournamentId}`)
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

        if ((tournamentData && tournamentData.error) || !tournamentData.user) {
          throw new Error(tournamentData.error && "Not able to send request");
        } else {
          return tournamentData;
        }
      } catch (error) {
        throw error;
      }
  }

  // get all tournaments
  async getAllTournaments() {
    try {
      const tournamentData = await axios
        .get(`${this.databaseUrl}/getTournaments`)
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (tournamentData.error) {
        throw new Error(tournamentData.error);
      } else {
        return tournamentData;
      }
    } catch (error) {
      throw error;
    }
  }

  // get teams from tournament id
  async getTeams(tournamentId) {
    try {
      const teamData = await axios
        .get(`${this.databaseUrl}/tournament/${tournamentId}`, {
          tournamentId,
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (teamData.error) {
        throw new Error(teamData.error);
      } else {
        return teamData;
      }
    } catch (error) {
      throw error;
    }
  }

  // createTeam tha tadd entry in team table
  async createTeam(name, id){
    try {
      const teamData = await axios.post(`${conf.databaseUrl}/team`, {
        name,
        tournament : {id}
      }).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      })
  
      if(teamData.error){
        throw new Error(teamData.error);
      }
      else
        return teamData;
    } catch (error) {
      throw error
    }
  }

  // create team that adds data in team table
  async createTeam(name, id){
    try {
      const teamData = await axios.post(`${conf.databaseUrl}/team`, {
        name,
        tournament : {id}
      }).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      })
  
      if(teamData.error){
        throw new Error(teamData.error);
      }
      else
        return teamData;
    } catch (error) {
      throw error
    }
  }

  // update team
  async updateTeam(team){
    try {
      const teamData = await axios.put(`${conf.databaseUrl}/team`, team).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      }) 
      if (teamData.error) {
        throw new Error(teamData.error);
      } else {
        return teamData;
      }
    } catch (error) {
      throw error;
    }
  }

  // get players from team id
  async getPlayers(teamId){
    try {
      const playerData = await axios.get(`${conf.databaseUrl}/team/${teamId}`, {
        teamId,
      }).then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (playerData.error) {
        throw new Error(playerData.error);
      } else {
        return playerData;
      }
    } catch (error) {
      throw error;
    }
  }

  // add player to team
  async createPlayer(name, id){
    try {
      const teamData = await axios.post(`${conf.databaseUrl}/player`, {
        name,
        team : {
          id
        }
      }).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      })
  
      if(teamData.error){
        throw new Error(teamData.error);
      }
      else
        return teamData;
    } catch (error) {
      throw error
    }
  }

  // update Player
  async updatePlayer(player){
    try {
      const playerData = await axios.put(`${conf.databaseUrl}/player`, player).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      })

      if(playerData.error){
        throw new Error(playerData.error);
      }
      else
        return playerData;
    }
    catch(error){
      throw error
    }
  }

  // delete player
  async deletePlayer(id){
    try {
      const playerData = await axios.delete(`${conf.databaseUrl}/player/${id}`).then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (playerData.error) {
        throw new Error(playerData.error);
      } else {
        return true;
      }
    } catch (error) {
      throw error;
    }
  }

  // delete team
  async deleteTeam(id){
    try {
      const teamData = await axios.delete(`${conf.databaseUrl}/team/${id}`).then((response) => response.data)
        .catch((error) => {
          throw new Error(error.message);
        });

      if (teamData.error) {
        throw new Error(teamData.error);
      } else {
        return true;
      }
    } catch (error) {
      throw error;
    }
  }


  // get AllMatches by matchType
  async getAllMatches(matchType){
    try {
      const matchData = await axios.get(`${conf.databaseUrl}/getMatches/${matchType}`).then((response) => response.data)
        .catch((error) => {
          throw error
        });
      
      if (matchData.error) {
        throw new Error(matchData.error);
      } else {
        return matchData;
      }
    } catch (error) {
      throw error;
    }
  }

  // crete bedmintan match
  async createBedmintanMatch(team1, team2,startDate, startTime, tournamentId){
    try {
      const matchData = await axios.post(`${conf.databaseUrl}/create`, {
        team1 : {
          id : team1
        },
        team2 : {
          id : team2
        },
        startTime,
        startDate,
        tournament : {
          id : tournamentId
        }
      }).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      })
  
      if(matchData.error){
        throw new Error(matchData.error);
      }
      else
        return matchData;
    } catch (error) {
      throw error
    }
  }

  // get bedmintan match
  async getMatches(id){
    try {
      const matchData = await axios.get(`${conf.databaseUrl}/tournamentmatch/${id}`).then((response) => response.data)
        .catch((error) => {
          throw error
        });

      if (matchData.error) {
        throw new Error(matchData.error);
      } else {
        return matchData;
      }
    } catch (error) {
      throw error;
    }
  }

  // fetch bedmintan match
  async getBedmintanMatch(id){
    try {
      const matchData = await axios.get(`${conf.databaseUrl}/getBadmintonMatch/${id}`).then((response) => response.data)
        .catch((error) => {
          throw error
        });

      if (matchData.error) {
        throw new Error(matchData.error);
      } else {
        return matchData;
      }
    } catch (error) {
      throw error;
    }
  }

  // delete bedmintan match
  async deleteBedmintanMatch(matchId){
    try {
      const matchData = await axios.delete(`${conf.databaseUrl}/match/${matchId}`).then((response) => response.data)
        .catch((error) => {
          throw error
        });

      if (matchData.error) {
        throw new Error(matchData.error);
      } else {
        return true;
      }
    } catch (error) {
      throw error;
    }
  }

  // update Bedmintan Match
  async updateBedmintanMatch(
    match
  ){
    try {
      const matchData = await axios.put(`${conf.databaseUrl}/badmintonMatch`,
        match).then((response) => response.data)
      .catch((error) => {
        throw error
      });

      if (matchData.error) {
        throw new Error(matchData.error);
      } else {
        return true;
      }
    } catch (error) {
      throw error;
    }
  }

  //createUserMatch
  async createUserMatch(data){
    try {
      const team1 = await axios.post(`${this.databaseUrl}/team`, {
        tournament : data.tournament,
        name : data.team1.name,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      });

       data.team1.players.map(async (p) => {
        const player = await this.createPlayer(p.name, team1.id);
      })


      const team2 = await axios.post(`${this.databaseUrl}/team`, {
        tournament : data.tournament,
        name : data.team2.name,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      });

       data.team2.players.map(async (p) => {
        const player = await this.createPlayer(p.name, team2.id);
      })

      const matchData = await axios.post(`${this.databaseUrl}/create`, {
        ...data,
        team1,
        team2
      }).then((response) => response.data)
      .catch((error) => {
        throw new Error(error.message);
      })

      return matchData

    } catch (error) {
      throw error
    }
  }










  // *******************************************************************************
  // ------------- Socket ------------------------
  // *******************************************************************************

  //create websocket for match
  async createWebSocket(matchId){
    try {
      return await SockJS(`${conf.databaseUrl}/ws`);
    } catch (error) {
      throw error
    }
  }

  
}

const database = new Database();
export default database;
