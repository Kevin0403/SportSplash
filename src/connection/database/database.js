import conf from "../../conf/conf";
import axios from "axios";

class Database {

    constructor() {
        this.databaseUrl = conf.databaseUrl;
        this.userTable = conf.userTable;
    }

    async login(email, password, ...rest) {
        try{
            const userData = await axios.post(`${this.databaseUrl}/verifyUser`, {  
                email,
                password,
                ...rest
            })

            if(userData.error){
                throw new Error(userData.error);
            }
            else{
                return userData;
            }
        }catch(error){
            throw error;
        }
    }

    // create user : that create and insert into user table

    async createUser(email, password, university, ...rest) {
        try{
            const userData = await axios.post(`${this.databaseUrl}/createUser`, {  
                email,
                password,
                university,
                ...rest
            }).then((response) => {
                return response.data;
            }).catch((error) => {
                throw new Error(error.message);
            });

            if(userData.error){
                throw new Error(userData.error);
            }
            else{
                return userData;
            }
        }
        catch(error){
            throw error;
        }
    }

    // delete user : that delete user from user table

    async deleteUser(email, ...rest) {
        try{
            const userData = await axios.post(`${this.databaseUrl}/deleteUser`, {  
                email,
                ...rest
            }).then((response) => response.data)
            .catch((error) => {
                throw new Error(error.message);
            });

            if(userData.error){
                throw new Error(userData.error);
            }
            else{
                return userData;
            }
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    // update user : that update user table

    async updateUser(email, password, university, ...rest) {
        try{
            const userData = await axios.post(`${this.databaseUrl}/updateUser`, {  
                email,
                password,
                university,
                ...rest
            }).then((response) => response.data)
            .catch((error) => {
                throw new Error(error.message);
            });

            if(userData.error){
                throw new Error(userData.error);
            }
            else{
                return userData;
            }
        }
        catch(error){
            throw error;
        }
    }

}

export default Database;