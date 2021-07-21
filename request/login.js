const express = require('express')
const router = express.Router()
const knex = require('../Db/conn')
const jwt = require('jsonwebtoken')

//Login
router.post('/login', async (req, res) => {

    try{

        const {email , password} = req.body

        if(!email || !password){
            
            res.status(401).json({message:"Please fill all details"})

        }else{

    const validUser = await knex('user').where('email', email).where('password', password)
    
    validUser.forEach(element => {
        pass =  (element.password)
        id = (element.id)
      });

      if(validUser.length === 0)  {

        res.status(402).json({error:'Credentials not match '})
            
        }else{

            token = jwt.sign({ iduser: id }, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789')
            const tkup = await  knex('user').where('id', id).update({token:token})
            res.status(200).json({message:token})
          

        }
}

    }catch(err)
    {
        console.log(err)
    }

})


module.exports = router