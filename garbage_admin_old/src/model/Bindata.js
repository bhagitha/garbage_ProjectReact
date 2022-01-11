const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@database.wkagg.mongodb.net/garbage?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema    //schema definition

const BinSchema = new Schema({
     bin_name: String,
     latitude: String,
     longitude: String,
     place: String,    
},{timestamps:true})



var Bindata = mongoose.model('bindata',BinSchema) //model creation
module.exports=Bindata;