const express = require('express')
const router = express.Router()
const knex = require('../Db/conn')
const jwt = require('jsonwebtoken')

//deldetails
router.post('/delDetails', async (req, res) => {

    const {id} = req.body
  
    if(!id){

        res.status(402).json("please  select field")

    }else{

        const del = await knex('bank_detail').where("id", id).del()
        res.status(200).json({message:"Bank details deleted  sucessfully"})

    }

})


module.exports = router