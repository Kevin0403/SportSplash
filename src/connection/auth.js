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
        teamSize,
        startDate,
        endDate,
        teams,
    }, user) {
        try {
            return await this.database.createTournament(tournamentName, game, teamSize, startDate, endDate, user, teams);
        }
        catch (error) {
            throw error;
        }
    }

    // Get Tournament from tournament id
    async getTournament(tournamentId) {
        try {
            return await this.database.getTournament(tournamentId);
        } catch (error) {
            throw error;
        }
    }

    // Get Tournaments
    async getTournaments() {
        try {
            return await this.database.getAllTournaments();
        } catch (error) {
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

    // Get Players from team id
    async getPlayers(teamId) {
        try {
            return await this.database.getPlayers(teamId);
        } catch (error) {
            throw error;
        }
    }


    // create Team function
    async createTeam({
        name
    }, id){
        try {
            return await this.database.createTeam(name, id);
        } catch (error) {
            throw error
        }
    }

    // create Player method
    async createPlayer({
        name
    }, id){
        try {
            return await this.database.createPlayer(name, id);
        } catch (error) {
            throw error
        }
    }

    // delete player
    async deletePlayer(id){
        try {
            return await this.database.deletePlayer(id);
        } catch (error) {
            throw error
        }
    }

    // delete team
    async deleteTeam(id){
        try {
            return await this.database.deleteTeam(id);
        } catch (error) {
            throw error
        }
    }

    // crete bedmintan match 
    async createBedmintanMatch({
        team1,
        team2,
        stime
    }, tournamentId){
        try {
            return await this.database.createBedmintanMatch(team1, team2, stime, tournamentId);
        } catch (error) {
            throw error
        }
    }
}

const auth = new Auth();

export default auth;