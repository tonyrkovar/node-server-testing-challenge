const request = require('supertest')
const users = require('./users-router.js')

describe('Should return users', () => {
    describe('/ get', () => {

        it('Should return a list of users', async () => {
            const ress = await request(users).get('/users')
                .then(res => {
                    expect(res.status).toBe(212)
                    // expect(res.body.username).toBe('Shrek')
                })
        })
    })
})