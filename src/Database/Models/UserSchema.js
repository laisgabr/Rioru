const { Schema } = require('mongoose')

module.exports = new Schema({
    _id: { type: String },
    blacklisted: { type: Boolean, default: false },
    afk: { type: Boolean, default: false },
    zoins: { type: Number, default: 0 },
    lastDaily: { type: String, default: "0" },
    marryStats: { type: Boolean, default: false },
    marryWith: { type: String },
    aboutMe: { type: String, default: "Zoe é minha amiga, altere esse texto com <prefix>aboutme" },
    premiumStats: { type: Boolean, default: false }
})