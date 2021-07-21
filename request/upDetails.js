const express = require('express')
const router = express.Router()
const knex = require('../Db/conn')


//update detail
router.post('/upDetails', async (req, res) => {
    const {bnk, ifsc, id} = req.body
    try{
    
        if(!bnk || !ifsc || !id){
    
            res.status(402).json("please  fill all details")
        
        }else{
            
            const data =  await knex('bank_detail').where('acc_no', bnk)
    
            if(data.length === 0){
    
                const conf = await  knex('bank_detail').update({acc_no:bnk, ifsc:ifsc}).where("id", id)
                res.status(200).json({message:"Bank details updated  sucessfully"})
    
            }else{
                
                res.status(405).json("Account no already exits")
            }
            
        }
    } catch(err){
        console.log(err)
    }
   

    
})

module.exports = router