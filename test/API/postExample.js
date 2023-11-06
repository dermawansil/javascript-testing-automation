const request = require('supertest')
const baseUrl = require ('../../env')

describe ('post request Example', () =>{
    it("success create user", async() => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 12345,
            "username": "dermasil",
            "firstname": "derma",
            "lastname": "silaen",
            "email":"derma@mailsac.com",
            "password": "12345",
            "phone": "082377373",
            "userstatus": 1

        })
        console.log ((await response).status)
        console.log ((await response).body)
    
    })
})
