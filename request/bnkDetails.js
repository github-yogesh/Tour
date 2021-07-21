const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')

router.get('/bnkDetails', authenticate,(req, res) => {
    res.send(req.data)
})

module.exports = router