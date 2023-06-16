
require('dotenv').config()
const { render } = require('ejs')
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')

const port = process.env.PORT || 8081
const hostname = process.env.HOST_NANME

configViewEngine(app)

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use('/', webRouter)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})