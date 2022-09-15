module.exports = async app => {
    const Digest = require('../controllers/digest')



    app.route('/user')
      .post(async (req, res)=>{

       
          let digest = new Digest('insertUser', req.body); 
          
          const response = await digest.fire()
          res.send(response.data.toString())
      
       
      })

      
    app.route('/user/foto')
    .post(async (req, res)=>{

     
        let digest = new Digest('addPhoto', req.body); 
        const response = await digest.fire()
        res.send(response.data.toString())
    
     
    })

    app.route('/user/delete')
    .put(async (req, res)=>{

     
        let digest = new Digest('deleteUser', req.body); 
        const response = await digest.fire()
        res.send(response.data.toString())
    
     
    })


    
    app.route('/user/search')
    .post(async (req, res)=>{

     
        let digest = new Digest('searchUser', req.body); 
        const response = await digest.fire()
        res.send(response.data.toString())
    
     
    })

}