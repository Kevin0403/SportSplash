import conf from "../conf/conf";
import Database from "./database/database";

class Auth {
    constructor() {
        this.database = Database;
    }

    // Login user : that verify user table
    async login({ email, password }) {
        try {
            return await this.database.login(email, password);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    //create user :- that create and insert into user table
    async createUser({ email, password, university, mobileno, fname, lname }) {
        try {
            const userData = await this.database.createUser(email, password, university, fname, lname, mobileno);
            if (userData) {
                // return await this.login(email, password);
            }

            return userData;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    // Update user : that update user table
    async updateUser({ email, password, university }) {
        try {
            return await axios.post(`${this.databaseUrl}/updateUser`, {
                email,
                password,
                university
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    // Delete user : that delete user table
    async deleteUser({ email }) {
        try {
            return await axios.post(`${this.databaseUrl}/deleteUser`, {
                email
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }


    // Create Tournament : that create and insert into tournament table
    async createTournament({
        tournamentName,
        game,
        banner,
        teamSize,
        startDate,
        endDate,

        teams,
    }, user) {
        try {
            return await this.database.createTournament(tournamentName, game, banner, teamSize, startDate, endDate, user, teams);
        }
        catch (error) {
            throw error;
        }
    }


    // Get Teams from tournament id
    async getTeams(tournamentId) {
        try {
            return await this.database.getTeams(tournamentId);
        } catch (error) {
            throw error;
        }
    }
}

const auth = new Auth();

export default auth;