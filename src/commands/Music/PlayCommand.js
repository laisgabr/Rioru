const Command = require('../../Util/Command')

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: [],
            description: '',
            category: ''
        })
    }
   async run(message, args, t) {
    const { MessageEmbed } = require('discord.js')

    const player = this.client.music.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
        selfDeafen: true
      });    

        this.client.music.search(
            args.join(' '),
            message.author
          ).then(async res => {
              switch(res.loadType) {
                  case "SEARCH_RESULT":
                    let index = 1;
                    const tracks = res.tracks.slice(0, 10);
                    const embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor(t('commands:MusicCommand.PlayCommand.SelectionMusic'), message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                        .setDescription(tracks.map(video => `**${index++} -** \`${video.title}\`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                     `))
                        .setFooter(t('errors:MusicCommand.PlayCommand.TempDefined'))
    
                    const deleteEmbed = await message.channel.send(embed)
    
                    const collector = message.channel.createMessageCollector(m => {
                        return m.author.id === message.author.id
    
                    }, { time: 60000, max: 1 });
    
            collector.on("collect", m => {
                let msg = m.content;
              if (msg.toLowerCase() === 'cancel' || msg.toLowerCase() === 'cancelar') return collector.stop('canceled');

              if (m.content.toLowerCase() === '1' || m.content.toLowerCase() === '2' || m.content.toLowerCase() === '3' || m.content.toLowerCase() === '4' || m.content.toLowerCase() === '5' || m.content.toLowerCase() === '6' || m.content.toLowerCase() === '7' || m.content.toLowerCase() === '8' || m.content.toLowerCase() === '9' || m.content.toLowerCase() === '10') {
              deleteEmbed.delete({ timeout: 2000 })
              m.delete({ timeout: 2000 })
    
              const track = tracks[Number(m.content) - 1];
              player.connect();
              player.queue.add(track)
    
              message.channel.send(t('commands:MusicCommand.PlayCommand.AddedFileMusic', { trackTitle: track.title })).then(msg => { if (msg.deletable) msg.delete({ timeout: 7000 }) });
              
          if (!player.playing && !player.paused && !player.queue.length)
          player.play();
    
       if (
          !player.playing &&
          !player.paused &&
          player.queue.size === res.tracks.length
        )
          player.play();
            }
    
                
          });
    
          collector.on("end", (_, reason) => {
            if (["time", "canceled"].includes(reason)) return message.channel.send(t('commands:MusicCommand.PlayCommand.CancelSelect'))
          });
          break;
              }
           
         })
    }
}