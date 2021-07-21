const express = require('express')
const router = express.Router()


router.get('/logout', (req, res) => {

    res.status(200).json("User logged out")
})

module.exports = router