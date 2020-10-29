const Command = require('../../Util/Command');

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: [],
            description: '',
            category: 'Music',
            voiceChannelOnly: true
        })
    }
    run(message, args, t) {
        const player = this.client.music.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
            selfDeafen: true
        });
        
        player.connect()
    }
}