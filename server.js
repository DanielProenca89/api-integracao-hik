var express = require('./config/express');
var app = express();
const port = app.get('port');


var pathComp= require("express-static");
app.use('/avatar',pathComp(__dirname+"/uploads",));
// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});