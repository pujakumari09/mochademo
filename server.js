const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
let math = {};
math.add = async (num1, num2)=>{
    try{
        if(num1 && num2){
            const result = await num1 + num2;
            return result;
        }else{
            throw 'missing arg';
        }
    }catch(err){
        throw err;
    }
}


math.multiply = async (num1, num2)=>{
    try{
        if(num1 && num2){
            const result = await num1*num2;
            return result;
        }else{
            throw 'missing arg';
        }
    }catch(err){
        throw err;
    }
}

module.exports = math;

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on Port .... ${process.env.PORT}`);
})