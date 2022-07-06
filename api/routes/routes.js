module.exports = async app => {
    const get = require('../controllers/get');
    const post = require('../controllers/post');
    const mail = require('../controllers/mail');
    const servers = app.data.querys;
    let methods = [];
    console.log(servers)

    servers.routes.forEach((e)=>{

    if(e.method === 'get'){
    methods.push(app.route('/'+e.name)
      .get(async (req, res)=>res.status(200).json(await get.getResult(e.name, e.query))));

    }

    if(e.method === 'post'){
    methods.push(app.route('/'+e.name)
      .post(async (req, res)=>res.status(200).json(await post.getResult(e.name, e.query, req.body))));
  
      }
  
    if (e.method === 'mail'){
    methods.push(app.route('/'+e.name)
      .post(async (req, res)=>res.status(200).json(await mail.sendmail(req.body))))

    }

    })

  return methods;
}