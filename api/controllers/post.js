'use strict'

const DB = require('./mysqlbkp');


async function getResult(name, query, params = null){

    const request = params != null?Object.values(params):'';

    console.log(query)
    console.log(request)
    try {
        const conn = await DB.newConn(name);
        const [result] = await conn.query(query, request);   
        console.log(result)
        conn.end()
        return result;
        
    } catch (error) {
        return error.message;
    }

}


module.exports = {getResult};
    




  