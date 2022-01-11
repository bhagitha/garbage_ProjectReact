const express = require('express')
var mongoose = require('mongoose');
const volunteersRouter = express.Router()
const login = require('../model/Logindata')
const register = require('../model/Registerdata')
const wastedata = require('../model/Wastedata')


    volunteersRouter.get('/view-volunteers',(req, res)=>{          
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
                    role: 1
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

    volunteersRouter.get('/delete/:id',(req, res)=>{
        const id = req.params.id
        login.deleteOne({_id:id})
        
        .then(function(){
            register.deleteOne({login_id:id})
            .then(()=>{
                res.status(200).json({
                    success:true,
                    error:false,
                    message:'Volunteer deleted!'
                })
            })
          
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
    })


    volunteersRouter.get('/accept-request/:id',(req,res)=>{
        const id = req.params.id
        console.log(id)
        wastedata.updateOne({_id:id},{$set:{status:1}})
        .then(()=>{
                res.status(200).json({
                success:true,
                error:false,
                message:'Waste Accepted',
            
            })
        })
        
    })



module.exports = volunteersRouter