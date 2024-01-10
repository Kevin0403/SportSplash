import conf from "../conf/conf";  
import Database from "./database/database";  

class Auth {
    constructor() {
        this.database = new Database();
    }
    
    // Login user : that verify user table
    async login({email, password}) {
        try{
            return this.database.login(email, password);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    //create user :- that create and insert into user table
    async createUser({email, password, university}) {
        try{
            const userData = await this.database.createUser(email, password, university);
            if(userData){
                this.login(email, password);
            }

        } catch (error) {
           throw new Error(error.message);
        }
    }

    // Update user : that update user table
    async updateUser({email, password, university}) {
        try{
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
    async deleteUser({email}) {
        try{
            return await axios.post(`${this.databaseUrl}/deleteUser`, {  
                email
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

const auth = new Auth();

export default auth;