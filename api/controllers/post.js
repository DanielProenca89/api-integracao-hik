'use strict'

const Mysql = require('./mysqlbkp');


async function getResult(name, query, params = null){

    const request = params != null?Object.values(params):'';

    console.log(request)
    try {
        const db = new Mysql(name)
        const [result] = await db.Post(request);  
        await db.Kill() 
        console.log(result)
        return result;
        
    } catch (error) {
        console.error;
    }

}


module.exports = {getResult};
    




  