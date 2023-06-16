const express = require('express')
const path = require('path')

const configViewEngine = (app) => {
    app.set('views', './src/views')
    app.set('view engine', 'ejs')

    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;