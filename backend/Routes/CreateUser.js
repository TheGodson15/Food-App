const express =require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser", async(req, res)=>{
    try{
        await User.create({
            name: "Ankit",
            password:"qwerty",
            email:"ankit@letsupgrade.com",
            location:"Nagpur"    
        })
        res.json({success:true})
    } catch(error){
        console.log(error)
        res.json({success:false})
    }
})
module.exports = router;