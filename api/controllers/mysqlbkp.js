'use strict';
/**Pool de conexão Mysql
* 
* Classe desenvolvida para criar um objeto de conexão MySQL
* @version v1.0.0
* Deselvolvido por: Daniel Proença
* Email: danielproenca89@gmail.com
*/

const mysql = require('mysql2');/*Importa o conector MySQL para NodeJS. Fonte: https://www.npmjs.com/package/mysql2 */
const servers = require('../data/querys.json');/*Importa o arquivo JSON contendo a configuração dos serivores que serão usados*/

class Mysql{

   constructor(name){
        this.server = servers.routes.find(server => server.name === name);/*Procura dentro do JSON o objeto contendo a chave 'name'*/
        this.config = {
        host: this.server.host,
        user: this.server.user,
        database: this.server.db,
        password: this.server.password,/*O objeto 'config' é montado com os dados passados por 'server'*/
        connectionLimit: 10
    }

   }
/*Metodo asíncrono 'getConn' retorna o objeto de conexão. o erro só será tratado posteriormente, ao chamar um dos métodos desse objeto*/
    async getConn(){
        const pool = mysql.createPool(this.config);
        const promisePool = pool.promise();
        return promisePool;
}
}




/*Função assincrona responsável por passar o parâmetro 'name' para construção da conexão a partir dos dados configurados */
async function newConn(name){
const conn = new Mysql(name).getConn()
return conn;
}


module.exports = {newConn}