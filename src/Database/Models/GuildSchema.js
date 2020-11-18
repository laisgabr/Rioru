const { Schema } = require('mongoose')

module.exports = new Schema({
    _id: { type: String },
    prefix: { type: String, default: "z!" },
    locale: { type: String, default: "pt-BR" },

    system: {
    systemAntiInviteStats: { type: Boolean, default: false },
    systemAntiLinkStats: { type: Boolean, default: false },
    systemAntiBots: { type: Boolean, default: false },
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