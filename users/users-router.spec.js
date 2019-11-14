const request = require('supertest')
const users = require('./users-router')

describe('Should return users', () => {
    it('Should return a list of users', () => {
        return request(users).get('/users').then(res => {
            expect(res.status).toBe(200)
            expect(res.body.username).toBe('Donkey')
        })
    })
})