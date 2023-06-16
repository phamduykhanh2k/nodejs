const express = require('express')
const router = express.Router()
const { getHomePage, getTestPage, postCreateUser, getCreateUserPage, getUpdateUserPage, postUpdateUser, getDeleteUserPage, postDeleteUser } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/test', getTestPage)
router.get('/create-user', getCreateUserPage)
router.get('/update-user/:id', getUpdateUserPage)
router.get('/delete-user/:id', getDeleteUserPage)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user', postDeleteUser)

module.exports = router