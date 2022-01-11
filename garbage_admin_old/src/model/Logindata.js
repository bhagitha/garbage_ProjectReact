const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@database.wkagg.mongodb.net/garbage?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema    //schema definition

const LoginSchema = new Schema({
     username: String,
     password: String,
     role: Number
    
})

var Logindata = mongoose.model('login_tb',LoginSchema) //model creation
module.exports=Logindata;