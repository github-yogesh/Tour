const express = require('express')
const router = express.Router()
const knex = require('../Db/conn')
const authenticate = require('../middleware/authenticate')

//bank
router.post('/addDetails', async (req, res) => {
    const {bnk, ifsc, user} = req.body
    try{
    
        if(!bnk || !ifsc || !user){
    
            res.status(402).json("please  fill all details")
        
        }else{
            
            const data =  await knex('bank_detail').where('acc_no', bnk)
    
            if(data.length === 0){
    
                const conf = await  knex('bank_detail').insert([{user:user, acc_no:bnk, ifsc:ifsc}])
                res.status(200).json({message:"Bank details added sucesfully"})
    
            }else{
                
                res.status(405).json("Account no already exits")
            }
            
        }
    } catch(err){
        console.log(err)
    }
   

    
})


router.get('/addDetails', authenticate,(req, res) => {
    res.send(req.email)
})

module.exports = router