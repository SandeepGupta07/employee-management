const mongoose = require('../config/mongoose')

const EmployeeSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    project : String,
    status : Number,
    role : { type:Number , default: null },
    address : { type:String , default: null },
    password : { type:String , default: null },
    created_at : { type:Date , default: Date.now }
})

module.exports = mongoose.model('Employee',EmployeeSchema)