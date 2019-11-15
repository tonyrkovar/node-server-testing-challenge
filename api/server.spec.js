const request = require('supertest')
const server = require('./server')

it('should set db environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
})

describe('base get test', () => {
    describe('get /', () => {
        it("should return status 200", () => {
            return request(server).get('/').then(res => {
                expect(res.status).toBe(200)
            })
        })
        it("should return api: up", () => {
            return request(server).get('/').then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
    })
})