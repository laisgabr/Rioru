const { Schema } = require('mongoose')

module.exports = new Schema({
    _id: { type: String },
    time: { type: Number, default: 2592000000 }
})