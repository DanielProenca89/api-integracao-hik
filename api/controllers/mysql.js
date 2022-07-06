const mysql = require('mysql2');


(async () => {
  let pool = mysql
    .createPool({
      host: 'localhost',
      user: 'dev',
      password: '123456',
      database:'siga',
      connectionLimit: 10,
    })
    .promise();
 
    let rows = await pool.query('SELECT * from agendamento');
    console.log(rows[0])
  
  pool.end();
})();