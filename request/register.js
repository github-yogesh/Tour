const express = require('express')
const router = express.Router()
const knex = require('../Db/conn')


//Register
router.post('/register', async (req, res) => {

    const { name, email, password, cpassword} = req.body

    if( !name || !email || !password || !cpassword){

        res.status(400).json({message:"Please fill all details"})

    }else{

        try{

            const data =  await knex('user').where('email', email)

            if(data.length === 0){

            const conf = await  knex('user').insert([{name:name, email:email, password:password, cpassword:cpassword}])
            res.status(200).json({message:"User registered sucesfully"})
           

            }else{

                res.status(422).json({message:"Email already exits"})

            }

        }catch(err){
            console.log(err)
        }
    
    }
    
 
})

module.exports = router