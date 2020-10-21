const { Schema } = require('mongoose')

module.exports = new Schema({
    _id: { type: String },
    xp: { type: Number, default: 0 },
    guild: { type: String }
})
