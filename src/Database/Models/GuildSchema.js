const { Schema } = require('mongoose')

module.exports = new Schema({
    _id: { type: String },
    prefix: { type: String, default: "z!" },
    locale: { type: String, default: "pt-BR" },
    premiumStats: { type: Boolean, default: false },

    blacklist: { 
        blacklisted: { type: Boolean, default: false },
        reason: { type: String },
        time: { type: String },
        staff: { type: String }
    },

    security: {
        antiInviteStats: { type: Boolean, default: false },
        antiLinkStats: { type: Boolean, default: false },
        antiBots: { type: Boolean, default: false },
        antiRaid: { type: Boolean, default: false },
        antiSpam: { type: Boolean, default: false },
        antiFlood: { type: Boolean, default: false }
    },
    
    welcome: {
        welcomeStats: { type: Boolean, default: false },
        welcomeChannelId: { type: String, default: "null" },
        welcomeText: { type: String, default: "Olá {member}, Seja bem-vindo(a) a {guild.name}, Leia as regras para não resultar em punições." },
    },
    
    goodbye: {
        goodByeStats: { type: Boolean, default: false },
        goodByeChannelId: { type: String, default: "null" },
        goodByeText: { type: String, default: "{member} saiu do Servidor, Eu achei que ele(a) era meu(minha) amigo(a) :sob:" },
    },
    
    logs: {
        logsStats: { type: Boolean, default: false },
        logsChannelId: { type: String, default: "null" },
    },
    
    levelsystem: {
        levelSystemStats: { type: Boolean, default: false },
        levelUpText: { type: String, default: "Parabéns {user}, Você subiu para o Level {level}!" },
        levelUpChat: { type: String, default: 'null' }
    }
})