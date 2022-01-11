const express = require('express')
var mongoose = require('mongoose');
const recyclerRouter = express.Router()
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const waste = require('../model/Wastedata')




recyclerRouter.get('/view-recycling-waste',(req, res)=>{
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
            $unwind:'$wasteData'
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
            $unwind:'$paymentData'
        }
    ]).then(function(data){
            
        res.status(200).json({
            success:true,
            error:false,
            Userdetails:data
        })
    }) 
    
})


    recyclerRouter.get('/accept-recycle/:id',(req,res)=>{
        const id = req.params.id
        waste.updateOne({_id:id},{$set:{status:2}})
        .then(()=>{
                res.status(200).json({
                success:true,
                error:false,
                message:'Waste Recycling',
            
            })
        })
        
    })


module.exports = recyclerRouter