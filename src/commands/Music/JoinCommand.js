const Command = require('../../Util/Command');

module.exports = class JoinCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            aliases: ['entrar'],
            description: 'Quer que eu entre no canal de voz ? Use isso',
            category: 'Music',
            voiceChannelOnly: true
        })
    }
   async run(message, args, t) {
        const player = await this.client.music.create({
            guild: message.guild.id,
            voiceChannel: message.member.voice.channel.id,
            textChannel: message.channel.id,
            selfDeafen: true
        });
        
        player.connect()
    }
}