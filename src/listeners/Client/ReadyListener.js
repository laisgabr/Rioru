const { Listener } = require('../../structure')
const { Utils, ErelaClient } = require('erela.js')

module.exports = class ReadyListener extends Listener {
  constructor () {
    super({
      name: 'ready',
      once: true
    })
  }

 async run (client) {
  this.lavalink = new ErelaClient(this, this.config.nodes, { autoPlay: true })
    .on('nodeConnect', node => console.log(`${node.options.tag || node.options.host} - Lavalink conectado com Sucesso.`))

    .on('nodeError', (node, err) => console.log(`Infelizmente, aconteceu um erro. Erro: ${err}`))
    
    .on('nodeReconnect', node => console.log(`${node.options.tag || nodes.options.host} está tentando fazer Reconexão...`))
    
    .on('nodeClose', node => console.log(`A instancia do Lavalink foi fechada ou você não ligou o Lavalink em outro terminal`))
    
    .on('queueEnd', async  player => {
      await player.textChannel.send('⏹ | A fila acabou...')
      setTimeout(function() {
        if (player.playing === false) {
        player.textChannel.send(':sleeping: | Saindo por causa da Inatividade....')
        return this.lavalink.players.destroy(player.guild.id)
      } else {
        console.log('Baiano')
      }
    }, 60000 * 2)

    })
    
    .on('trackStart', ({ textChannel }, { title, duration, author, displayThumbnail }) => {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setColor('#66dbff')
    .addField('Música:', `**${title}**`)
    .addField(`Duração:`, `\`${Utils.formatTime(duration, true)}\``)
    .addField(`Artista/Canal:`, `${author}`)

     textChannel.send(embed)
    })
    
    .on('trackEnd', (player, track) => {
      player.setVolume(100);
    })
    
    .on('trackError', ({ textChannel, err }, { title }) => {
      textChannel.send('Ocorreu um erro ao carregar ' + title + ' devido a: ' + err)
    });
   
    var status = [
      `😉 Tenho Custom Prefix, Me mencione para saber mais!`,
      `😛 Sabia que tenho um Sistema de Música ?`,
      `😢 Estou Hospedada na Heroku mas a minha qualidade fica péssima para tocar, Me ajude por favor...`,
      `😎 Sabia que eu sou open-source? | github.com/MrGamingBR/SweetBot`
  ],
   i = 0
   setInterval(() => this.user.setActivity(`${status[i++ % status.length]}`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/mrgamingbr0001"
    }), 8000)

   console.log(`
    ${this.user.username} iniciada com:
    
    ${this.users.cache.size} Usuários;
    
    ${this.guilds.cache.size} Guilds;
    
    ${this.commands.size} Comandos.`)
  }
}
