const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'nowplaying',
            aliases: ['np'],
            category: 'Music'
        })
    }
    run ({ channel, lavalink, guild, member }) {      
    const voiceChannel = member.voice.channel;
    if (!voiceChannel) return channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')

    const { MessageEmbed } = require('discord.js')
    const { Utils } = require('erela.js')
    const { stripIndents } = require('common-tags')

    const player = lavalink.players.get(guild.id);
    
    if(!player.queue[0] || !player) return channel.send('Não tem músicas tocando')
    
    const { title, author, duration, thumbnail } = player.queue[0];
    
  const embed = new MessageEmbed()
  .setColor("#66dbff")
  .setAuthor("Tocando Agora:")
  .setThumbnail(thumbnail)
  .setDescription(stripIndents`
  ${player.playing ? "▶️" : "⏸️"} **${title}** 
    
  \`${Utils.formatTime(duration, true)}\`
  
  ${author} 
  `); 
  return channel.send(embed);
    }
}
