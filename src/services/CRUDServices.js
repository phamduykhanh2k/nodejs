const connection = require('../config/database');
const { use } = require('../routes/web');

const getAllUser = async () => {
    let [result, fields] = await connection.query(`select * from Users`)
    return result;
}

const getUserById = async (userId) => {
    let [result, fields] = await connection.query(`select * from Users where id = ?`, [userId])
    let user = result && result.length > 0 ? result[0] : {};
    return user
}

const updateUserByID = async (id, name, email, city) => {
    let [result, fields] = await connection.query(`UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ?`, [name, email, city, id])
}

const deleteUser = async (userId) => {
    let [result, fields] = await connection.query(`DELETE FROM Users WHERE id = ?`, [userId])
}

module.exports = {
    getAllUser, getUserById, updateUserByID, deleteUser
}