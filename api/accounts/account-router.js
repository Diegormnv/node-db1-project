const express = require('express')
const Account = require('./account-model')
const { validateId, validateAccount } = require('../middleware/middleware')

const router = express.Router()

router.get('/', async(req, res, next) =>{
    try{
        const accounts = await Account.get()
        res.status(200).json(accounts)
    } catch(error){
        next(error)
    }
})

module.exports = router;
