const mathCal = require('../server');
const assert = require('assert').strict;

describe("Math Calculations", function(){
    describe("Math add", ()=>{
        it("should be equal to 2", async ()=>{
            const result = await mathCal.add(1, 1);
            assert.equal(result, 2);
        })
        it("should be equal to 3", async ()=>{
            const result = await mathCal.add(2, 1);
            assert.equal(result, 3);
        })
    })
    describe("Math multiply", ()=>{
        it("should be equal to 9", async ()=>{
            const result = await mathCal.multiply(3, 3);
            assert.equal(result, 9);
        })
        it("should be equal to 12", async ()=>{
            const result = await mathCal.multiply(3, 4);
            assert.equal(result, 10);
        })
    })
})