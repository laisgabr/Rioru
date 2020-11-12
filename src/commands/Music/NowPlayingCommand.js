const Command = require('../../Util/Command');
const moment = require('moment')
moment.locale('pt-BR')

module.exports = class NowPlayingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nowplaying',
            aliases: ['np'],
            description: 'Veja a música que está tocando agora',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
   async run(message, args, t) {
    const player = this.client.music.players.get(message.guild.id)

    const position = await moment.duration(player.position, "seconds").format()
    const numeroFinal = await moment.duration(player.duration, "seconds").format();
    const { MessageEmbed } = require('discord.js')

    const embed = new MessageEmbed()
    .setDescription(`
    Tocando Agora ${player.playing ? "" : ""}
    `)
    }
}