'use strict'

const DB = require('./mysql');


async function getResult(name, query){
    
    
    try {
        const conn = await DB.newConn(name);
        const [result] = await conn.query(query);     
        return result;
        
    } catch (error) {
        return error.message;
    }

}


module.exports = {getResult};
    




  