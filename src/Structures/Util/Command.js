module.exports = class Command {
    constructor(client, options) {
        this.client = client;
        this.commandSettings = {
            name: options.name || null,
            aliases: options.aliases || [],
            description: options.description || "Sem descrição",
            usage: options.usage || "Sem forma de Usar Provida",
            category: options.category || "General",
            cooldown: options.cooldown || 4, 
            onlyDevs: options.onlyDevs || false,
            userPermissionNeeded: options.userPermissionNeeded || null,
            botPermissionNeeded: options.botPermissionNeeded || null,
            
            voiceChannelOnly: options.voiceChannelOnly || false,
            playerOnly: options.playerOnly || false,
            queueOnly: options.queueOnly || false,
            playingOnly: options.playingOnly || false
        }
    }
    
}