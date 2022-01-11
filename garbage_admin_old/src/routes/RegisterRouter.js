const express = require('express')
const register = require('../model/Registerdata')
const login = require('../model/Logindata')
const bcrypt = require('bcryptjs')
const RegisterRouter = express.Router()


RegisterRouter.post('/register', (req, res)=>{     
    console.log("data",req.body)
    bcrypt.hash(req.body.password,10, function(err, hashedPass){
        if(err){
           return res.status(400).json({
                success:false,
                error: true,
                message:'password hashing error'
            })
        }
        let logindata = {
            username:req.body.username,
            password:hashedPass,
            role:req.body.role
        }
        login.findOne({username:req.body.username})
        .then(username=>{
            if(username){
                return res.status(400).json({
                    success:false,
                    error: true,
                    message:'username already exist!'                    
                })
            }
            else{
                var item = login(logindata)
                item.save()
                .then(()=>{
                    login.findOne({username:logindata.username})
                    .then(function(details){
                        var id = details._id
                        let registerdata = {
                            login_id:id,
                            name:req.body.name,
                            address:req.body.address,
                            phone:req.body.phone
                        }
                        var register_item = register(registerdata)
                        register_item.save()
                        .then(()=>{
                            res.status(200).json({
                                success:true,
                                error: false,
                                message:'registration success'
                            })
                        })
                        
                    })
                    
                })

            }
           
        })
                     
    })
    
})

RegisterRouter.get('/register-details',function(req, res){
    login.aggregate([
        {
            $lookup:
            {
                from:'register_tbs',
                localField:'_id',
                foreignField:'login_id',
                as:'registerData'
            }         
        }
    ]).then(function(data){
            
        res.status(200).json({
            success:true,
            error:false,
            details:data
        })
    }) 
})


RegisterRouter.get('/user-details',function(req, res){
    login.aggregate([
        {                
           $lookup:
           {
               from:'register_tbs',
               localField:'_id',
               foreignField:'login_id',
                        
               as:"registerdetails"
           }                        
        },
        {
           $match:
           { 
               role: 2
           }
        }
    ]).then(function(data){
            
        res.status(200).json({
            success:true,
            error:false,
            details:data
        })
    }) 
})

RegisterRouter.get('/delete/:id', (req, res) => {
    const id = req.params.id
    login.deleteOne({ _id: id })

        .then(function () {
            register.deleteOne({ login_id: id })
                .then(() => {
                    res.status(200).json({
                        success: true,
                        error: false,
                        message: 'User deleted!'
                    })
                })

        })
        .catch(err => {
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
})

module.exports = RegisterRouter