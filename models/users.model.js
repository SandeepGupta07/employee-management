const mongoose = require('../config/mongoose')

const Schema = mongoose.Schema
//const objectID = Schema.ObjectID

const UsersSchema = new Schema({
    email : String,
    password : String,
    is_admin : { type:Boolean , default: true },
    created_at : { type:Date , default: Date.now }
})

module.exports = mongoose.model('Users',UsersSchema)