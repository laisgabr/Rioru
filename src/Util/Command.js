module.exports = class Command {
    constructor (client, options) {
        this.client = client

        this.config = {
            name: options.name,
            aliases: options.aliases || [],
            category: options.category || "Não categorizado",
            description: options.description || null,
            usage: options.usage || "Sem forma de Usar Disponibilizada",
            UserPermission: options.UserPermission || null,
            onlyDevs: options.onlyDevs || false,

            voiceChannelOnly: options.voiceChannelOnly || false,
            playerOnly: options.playerOnly || false,
            playingOnly: options.playingOnly || false,
            notPlayingOnly: options.notPlayingOnly || false,
            queueOnly: options.queueOnly || false,

            nsfwChannelOnly: options.nsfwChannelOnly || false
        }
    }

    getResponseURL(endpoint) {
        if(typeof endpoint !== 'string') throw new RangeError('Command#getResponseURL() can only String')
        const superagent = require('superagent')

        superagent.get(endpoint)
        .end((err, response) => {
            if(err) return err;
            return response.body.url
        })
    }

    getResponseMessageURL(url, typeQuery) {
        if(typeof url !== 'string') throw new RangeError('Command#getResponseMessageURL() url can only String')
        if(typeof typeQuery !== 'string') throw new RangeError('Command#getResponseMessageURL() typeQuery can only String')

        const superagent = require('superagent')
        superagent.get(url)
        .query({ type: typeQuery })
        .end((err, response) => {
            if(err) return err;
            return response.body.message
        })
    }
}