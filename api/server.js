const express = require('express')

const usersRouter = require('../users/users-router')

const server = express()

server.use(express.json())
server.use('/auth', usersRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: "is runnings" })
})

module.exports = server;