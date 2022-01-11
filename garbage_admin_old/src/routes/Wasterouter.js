const express = require('express')
const WasteRouter = express.Router()
const wastedata = require('../model/Wastedata')
const paymentdata = require('../model/payment')
const login = require('../model/Logindata')
const checkAuth = require("../middleware/check-auth")


WasteRouter.post('/add',checkAuth,(req, res)=>{
    var item = {
        login_id:req.userData.userId,
        type:req.body.type,
        quantity:req.body.quantity,
        status:'0'
    }
    var value = wastedata(item)
    value.save()
    .then((data)=>{
        var paymentData = {
            login_id:req.userData.userId,
            waste_id:data._id,
            amount:req.body.amount
        }
        var paymentValue = paymentdata(paymentData)
        paymentValue.save()
        .then(()=>{
            res.status(200).json({
                success:true,
                error:false,
                message:'Waste added',
                payment:'success',
                user:req.userData.userId
            })
        })     
    })
    
    .catch(err=>{
        return res.status(401).json({
            message: "Something went Wrong!"
        })
    })
    
    
})


WasteRouter.get('/user-payment',(req,res)=>{
    login.aggregate([
        {
            $lookup:
            {
                from:'waste_tbs',
                localField:'_id',
                foreignField:'login_id',
                as:'wasteData'
            }         
        },
        {
            $lookup:
            {
                from:'payment_tbs',
                localField:'_id',
                foreignField:'login_id',
                as:'paymentData'
            }  
        }
    ]).then(function(data){
            
        res.status(200).json({
            success:true,
            error:false,
            Userdetails:data
        })
    }) 
})


WasteRouter.get('/single-user-payment',checkAuth,(req,res)=>{
    login.aggregate([
        {
            $lookup:
            {
                from:'waste_tbs',
                localField:'_id',
                foreignField:'login_id',
                as:'wasteData'
            }         
        },
        {
            $lookup:
            {
                from:'payment_tbs',
                localField:'_id',
                foreignField:'login_id',
                as:'paymentData'
            }  
        },
        {
            $match:
            {
                username:req.userData.username
            }
        }
    ]).then(function(data){
            
        res.status(200).json({
            success:true,
            error:false,
            Userdetails:data
        })
    }) 
})



module.exports= WasteRouter
