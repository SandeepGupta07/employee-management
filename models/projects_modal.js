const mongoose = require('mongoose')

const ProjectSchema = mongoose.Schema({
    name : String,
    created_at : { type:Date , default: Date.now }
})

module.exports = mongoose.model('Projects',ProjectSchema)