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
        
        const { Utils } = require("erela.js")
        const { stripIndents } = require("common-tags")

        const voiceChannel = member.voice.channel
        if (!voiceChannel) return channel.send('Você não está num canal de Voz ou no Mesmo que eu!')

        const player = lavalink.players.get(guild.id)
        if(!player || !player.queue[0]) return channel.send("Não tem nenhuma Música Tocando");
        
   
        if(!args[0] === 'all' || !args[0] === 'track') return channel.send('Diga <all/track> para eu loopar para você!')
        switch(args[0]) {
            case "all":
            if(player.trackRepeat === true) {
                player.setTrackRepeat(false)
            }

            if (player.queueRepeat === false){
                player.setQueueRepeat(true);
                const embed = new MessageEmbed()
                .setAuthor("Repetindo a Lista de Reprodução")
                return channel.send(embed)
            } else {
                player.setQueueRepeat(false);
                const embeda = new MessageEmbed()
                .setAuthor("Tirando o Loop")
                return channel.send(embeda)
            } 

            case "track": 
            if (player.queueRepeat === true) {
                player.setQueueRepeat(false)
            }

            const { author, title, uri, thumbnail } = player.queue[0]

                if(player.trackRepeat === false){
                    player.setTrackRepeat(true);
                    const embed = new MessageEmbed()
                    .setAuthor("Repetindo:")
                    .setThumbnail(thumbnail)
                    .setDescription(stripIndents`
                    ${player.playing ? "▶️" : "⏸️"} **[${title}](${uri})** \`${Utils.formatTime(duration, true)}\` by ${author}
                    `)
                    return channel.send(embed)
                } else {
                    player.setTrackRepeat(false);
                    const embed = new MessageEmbed()
                    .setAuthor("Parando de Repetir:")
                    .setThumbnail(thumbnail)
                    .setDescription(stripIndents`
                    ${player.playing ? "▶️" : "⏸️"} **[${title}](${uri})** \`${Utils.formatTime(duration, true)}\` Do Canal/Artista: ${author}
                    `)
                    return channel.send(embed)
                }
             
        }
    }
}
