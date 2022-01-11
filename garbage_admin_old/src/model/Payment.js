const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@database.wkagg.mongodb.net/garbage?retryWrites=true&w=majority')  //database connection
const Schema = mongoose.Schema    //schema definition

const PaymentSchema = new Schema({
     login_id:{ type: Schema.Types.ObjectId, ref: "login_tb", required: true },
     waste_id:{ type: Schema.Types.ObjectId, ref: "waste_tb", required: true },
     amount:{ type: String, required: true },
})

var Paymentdata = mongoose.model('payment_tb',PaymentSchema) //model creation
module.exports=Paymentdata;