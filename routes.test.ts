import request from 'supertest'
import {app} from './main'

//test suite for testing two get request endpoints
   describe('post requests', () => {
    it('should authenticate user login', async () => {
        const res:any = await request(app)
        .post('/login')
        .send({
          username: "tabby@gmail.com",
          password: "t001",
          role:"admin"
        }) 
        expect(res.statusCode).toBe(200)
        
    })
}) 

//test suite for testing two get request endpoints
  describe('get requests', () => {
  it('landing page route', async() => {
      const res:any = await request(app)
      .get('/landingPage')
      expect(res.statusCode).toBe(200)
  })
  it('search route', async() => {
    const res:any = await request(app)
    .get('/search')
    expect(res.statusCode).toBe(200)
  })  
})  
  
