const { Schema } = require('mongoose')

module.exports = new Schema({
    _id: { type: String },
    
    blacklist: {
    blacklisted: { type: Boolean, default: false },
    reason: { type: String },
    time: { type: String }
    },
    
    afk: { type: Boolean, default: false },
    
    economy: {
    zoins: { type: Number, default: 0 },
    lastDaily: { type: String, default: "0" },
    },
    
    marry: {
    marryStats: { type: Boolean, default: false },
    marryWith: { type: String },
    marryTime: { type: Number, default: 0 }, 
    },
    
    aboutMe: { type: String, default: "Zoe é minha amiga, altere esse texto com <prefix>aboutme" },
    badges: { type: String, default: 'null' },
    premiumStats: { type: Boolean, default: false }
})