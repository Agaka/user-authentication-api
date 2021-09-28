import pool from "../db"
import User from "../models/user.model"

class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const query = 'SELECT uuid, username FROM application_user'
        const {rows} = await pool.query<User>(query);
        return rows || []
    }
}

export default new UserRepository()