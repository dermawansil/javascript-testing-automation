const assert = require('chai').assert;
const app = require ('../../assert')
//Asserting
// cara assert menggunakan chai

describe("welcome test",function(){
    it("app should return welcome message", function(){

        assert.equal(app(),"welcome to QA course at myskill")
    
    })

})