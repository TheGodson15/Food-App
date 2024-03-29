const express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const RestaurantUser = require('../models/res_user_model')
require('dotenv').config();

router.post("/rverifyuser", async (req, res) => {
    let email = req.body.email;
    try { 
        let userData = await RestaurantUser.findOne({ email });

        if (!userData) {
            return res.status(400).json({ error: "Email already registered" })
        }

        const comparePwd = bcrypt.compare(req.body.password, userData.password)
        if (!comparePwd) {
            return res.status(400).json({ error: "Incorrect Password" })
        }

        const data = {
            user: { 
                id: userData.id
             }
        }
        const secretKey = "SflKxwRJSMeKKF2QT"
        const authToken =  jwt.sign(data, secretKey)

        return res.json({ success: true, authToken: authToken })


    } catch (error) {
        console.log('error-----------', error)
        return res.status(400).json({ success: false })
    }

})

module.exports = router;

