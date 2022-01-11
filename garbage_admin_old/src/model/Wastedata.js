const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@database.wkagg.mongodb.net/garbage?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema    //schema definition

const WasteSchema = new Schema({
     login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
     type:{ type: String, required: true },
     quantity:{ type: String, required: true },
     status:{ type: Number, required: true } 
})

var Wastedata = mongoose.model('waste_tb',WasteSchema) //model creation
module.exports=Wastedata;