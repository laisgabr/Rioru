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
}