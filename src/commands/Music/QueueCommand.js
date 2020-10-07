const { Command } = require('../../structure')

module.exports = class QueueCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'queue',
            aliases: ['q'],
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            playingOnly: true
        })
    }
   async run ({ channel, guild, lavalink, member }) {
    const { MessageEmbed } = require('discord.js')
    let index = 1;
    let string = "";

    const player = lavalink.players.get(guild.id);

    if(player.queue[0]) string += `__**Tocando Agora: **__\n ${player.queue[0].title} - **Música pedida por ${player.queue[0].requester.username}**. \n`;
    if(player.queue[1]) string += `__**Lista de Reprodução:**__\n ${player.queue.slice(1, 10).map(x => `**${index++})** [${x.title}](${x.uri}) - **Música pedida por ${x.requester.username}**.`).join("\n")}`;

    const embed = new MessageEmbed()
    .setColor("#66dbff")
    .setAuthor(`Lista de Reprodução de ${guild.name}`, guild.iconURL({ dynamic: true, size: 2048 }))
    .setThumbnail(`http://i.ytimg.com/vi/${player.queue[0].identifier}/hqdefault.jpg`)
    .setDescription(string);

    return channel.send(embed)
    }
}
