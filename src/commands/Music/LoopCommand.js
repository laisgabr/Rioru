const { Command } = require('../../structure')

module.exports = class LoopCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'loop',
            aliases: [],
            category: 'Music'
        })
    }
    run ({ channel, guild, lavalink, member, args }) {
        const { MessageEmbed } = require('discord.js')

        const player = lavalink.players.get(guild.id);
    if (!player) return channel.send("Não tem nada tocando");

    const  canal  = member.voice.channel;

    if (!canal) return channel.send("Você precisa estar num canal de voz");

    if (args.length && /queue/i.test(args[0])) {
      player.setQueueRepeat(!player.queueRepeat);
      const queueRepeat = player.queueRepeat ? "Ativando Loop da Lista de Reprodução" : "Desativando Loop da Lista de Reprodução";
      return channel.send(`${queueRepeat}`)
    }

    player.setTrackRepeat(!player.trackRepeat);
    const trackRepeat = player.trackRepeat ? "Ativando Loop" : "Desativando Loop";

    const { title, author } = player.queue[0]

    const embed = new MessageEmbed()

    .setAuthor(`${trackRepeat} na Música ${title} de ${author}`)
    channel.send(embed)
    }
}
