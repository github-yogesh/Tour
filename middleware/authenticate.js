const knex = require('../Db/conn')
const jwt = require('jsonwebtoken')

const Authenticate = async (req, res, next) =>{

    try{
        if(req.header("Authorization") != ""){
        
        token = req.header("Authorization")
         token = token.split(" ")[1] 
         token = JSON.parse(token)
        const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'
        const verifcation = jwt.verify(token, key)

        if(!verifcation){
            res.status(401).send("Inavlid Token")
        }else{
            
            const user = await knex('user').where('token', token)
            if(!user){
                res.status(403).send("user not found")
            }else{

                user.forEach(element => {
                    email =  (element.email)
                    id = (element.id)
                  });

                 
                  
            }
        }

        const user = await knex('user').where('token', token)
        const acc = await knex('bank_detail').where('user', email)
        req.email = user
        req.data = acc
        next()
     }else{
        res.status(401).send('Authentication Error')
         console.log("no header")
     }
    }catch(err){
        res.status(401).send('Authentication Error')
        console.log(err)
    }

}

module.exports = Authenticate