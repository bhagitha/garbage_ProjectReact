const express = require('express')
const BinRouter = express.Router()
const Bindata = require('../model/Bindata') 




    BinRouter.get('/view-bin',(req, res)=>{
        Bindata.find()
        .then(function(bin){
           if(bin==0){
                return res.status(401).json({
                    success:false,
                    error:true,
                    message:"No Bin Found!"
                })
            } 
            else{
                return res.status(200).json({
                        success:true,
                        error:false,
                        data:bin
                })
            }
        })
        
    })

    BinRouter.post('/add',(req, res)=>{
        var item ={
            bin_name:req.body.name,
            latitude:req.body.lati,
            longitude:req.body.long,
            place:req.body.place
        }        
        var bin = Bindata(item)
        bin.save();
        return res.status(200).json({
            success:true,
            error:false,
            message:"New Bin Added Successfully !"            
        })
    })

    BinRouter.get('/edit/:id',(req, res)=>{
        const id = req.params.id
        Bindata.findOne({_id:id})
        .then(function(data){
            return res.status(200).json({
                success:true,
                error:false,
                message:data            
            })
        })
    })


    BinRouter.post('/update',(req, res)=>{
        var items = {
            bin_name:req.body.name,
            latitude:req.body.lati,
            longitude:req.body.long,
            place:req.body.place,
            id:req.body.id
        }
        Bindata.updateOne({_id:items.id},{$set:items})
        .then(function(){
            Bindata.find().then(function(bin){
                res.status(200).json({
                    success:true,
                    error:false,
                    message:'Bin data updated!',
                
                })
            })
            
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
    })


    BinRouter.get('/delete/:id',(req, res)=>{
        const id = req.params.id
        Bindata.deleteOne({_id:id})
        .then(function(){
            res.status(200).json({
                success:true,
                error:false,
                message:'Bin deleted!'
            })
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Something went Wrong!"
            })
        })
    })


    


module.exports = BinRouter