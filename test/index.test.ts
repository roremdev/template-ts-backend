import 'module-alias/register'
import supertest from 'supertest'
import server from '../src/server'

const request = supertest(server)

describe('API', () => {
    describe('GET /', () => {
        it('should return 200 OK', async () => {
            const { status } = await request.get('/')
            expect(status).toBe(200)
        })
        it('should return API message', async () => {
            const { body } = await request.get('/')
            expect(body).toEqual(
                expect.objectContaining({
                    project: expect.stringMatching('Evolution Nutrition'),
                    mode: server.get('mode'),
                    version: server.get('version'),
                })
            )
        })
    })
})
