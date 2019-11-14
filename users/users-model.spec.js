const db = require('../data/db-config')
const { add } = require('./users-model.js')

describe('add a hobit', () => {
    describe('Should add a hobbit', () => {
        beforeEach(() => {
            return db('users').truncate()
        })
        it('should add a user', async () => {
            await add({ username: "Donkey", password: "shrek" })
        })
    })
})