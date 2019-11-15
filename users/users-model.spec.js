const db = require('../data/db-config')
const { add } = require('./users-model.js')

describe('add a user', () => {
    describe('Should add a user', () => {
        beforeEach(() => {
            return db('users').truncate()
        })
        it('should add a user', async () => {
            await add({ username: "darude man", password: "shreks" })
        })
    })
})