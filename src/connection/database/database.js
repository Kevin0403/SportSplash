import conf from "../../conf/conf";
import axios from "axios";

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
        .post(`${conf.databaseUrl}/createuser`, {
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

      if (userData.error) {
        throw new Error(userData.error);
      } else {
        return userData;
      }
    } catch (error) {
      throw error;
    }
  }

  // create tournament : that create and insert into tournament table
  async createTournament(
    email,
    game,
    tournamentName,
    banner,
    teams,
    teamSize,
    startDate,
    endDate,
    ...rest
  ) {
    try {
      const tournamentData = await axios
        .post(`${this.databaseUrl}/tournament`, {
          email,
          tournamentName,
          banner,
          game,
          teams,
          teamSize,
          startDate,
          endDate,
          time,
          ...rest,
        })
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
}

const database = new Database();
export default database;
