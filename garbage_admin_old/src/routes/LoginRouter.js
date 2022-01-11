const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const LoginRouter = express.Router()

LoginRouter.post('/logindata',(req, res)=>{
    console.log("logindata====",req.body)
    let fetchedUser
    login.findOne({username: req.body.username})
    .then((user)=>{
        if(!user){
            return res.status(401).json({
                success:false,
                error:true,
                message:"User Not Found!"
            })
        }
            fetchedUser = user
            return bcrypt.compare(req.body.password, user.password)      
    })
    .then(result=>{
        if(!result){
            return res.status(401).json({
                success:false,
                error:true,
                message:"Please Check Password!"
            })
        }
        id = fetchedUser._id
       
        register.findOne({login_id:id})
        .then((registerData)=>{
            const token = jwt.sign(
                {username:fetchedUser.username, name: registerData.name, userId:fetchedUser._id, userRole:fetchedUser.role},
                "secret_this_should_be_longer",
                { expiresIn: "1h" }
            )
            res.status(200).json({
                success:true,
                error:false,
                token: token,
                expiresIn: 3600,
                loginId: fetchedUser._id,
                userRole:fetchedUser.role,
                name: registerData.name
               
                                
            })
        })
 
    })
    .catch(err=>{
        return res.status(401).json({
            message: "Auth failed"
        })
    })
})

module.exports= LoginRouter