const { emit } = require('nodemon')
const connection = require('../config/database.js')
const e = require('express')
const { getAllUser, getUserById, updateUserByID, deleteUser } = require('../services/CRUDServices.js')
const { use } = require('../routes/web.js')

const getHomePage = async (req, res) => {
    const result = await getAllUser()
    return res.render('home.ejs', { listUser: result })
}

const getTestPage = (req, res) => {
    res.render('test.ejs')
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

const getUpdateUserPage = async (req, res) => {
    let userId = req.params.id
    let user = await getUserById(userId)

    res.render('update.ejs', { user: user })
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body
    let [result, fields] = await connection.query(`INSERT INTO Users(email, name, city) VALUES (?, ?, ?)`, [email, name, city])

    res.redirect('/')
}

const postUpdateUser = async (req, res) => {
    let { id, name, email, city } = req.body

    await updateUserByID(id, name, email, city)

    res.redirect('/')
}

const getDeleteUserPage = async (req, res) => {
    let userId = req.params.id
    let user = await getUserById(userId)
    res.render('confirm.ejs', { user: user })
}

const postDeleteUser = async (req, res) => {
    let userId = req.body.id

    await deleteUser(userId)

    res.redirect('/')
}

module.exports = {
    getHomePage, getTestPage, postCreateUser, getCreateUserPage, getUpdateUserPage, postUpdateUser, getDeleteUserPage, postDeleteUser
}