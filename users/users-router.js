const router = require('express').Router()

const db = require('./users-model')

router.get('/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(400).json("Bad request")
        })
})

