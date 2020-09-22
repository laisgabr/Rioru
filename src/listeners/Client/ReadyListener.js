/* eslint-disable quotes */
/* eslint-disable indent */
const { Listener } = require('../../structure')
const erela = require('erela.js')
const { Utils } = require('erela.js')

module.exports = class ReadyListener extends Listener {
  constructor () {
    super({
      name: 'ready',
      once: true
    })
  }

 async run (client) {
  this.lavalink = new erela.ErelaClient(this, this.config.nodes, { autoPlay: true })
    .on('nodeConnect', node => console.log(`${node.options.tag || node.options.host} - Lavalink conectado com Sucesso.`))
    
    .on('nodeError', (node, err) => console.log(`Infelizmente, aconteceu um erro. Erro: ${err}`))
    
    .on('nodeReconnect', node => console.log(`${node.options.tag || nodes.options.host} está tentando fazer Reconexão...`))
    
    .on('nodeClose', node => console.log(`A instancia do Lavalink foi fechada ou você não ligou o Lavalink em outro terminal`))
    
    .on('queueEnd', async  player => {
      await player.textChannel.send('⏹ | A fila acabou...')
      return this.lavalink.players.destroy(player.guild.id)
    })
    
    .on('trackStart', ({ textChannel }, { title, duration, author, thumbnail }) => {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
      .setColor('#66dbff')
      .setDescription(`
      Música: 
**${title}** 

Duração:      
\`${Utils.formatTime(duration, true)}\`

Canal/Artista :
${author}
`)
.setThumbnail(thumbnail)
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
      `😛 Sabia que tenho um sistema de músicas em desenvolvimento ? `,
      `😬 Me ajude, Doando para Meus Criadores...`,
      `😢 Estou Hospedada na Heroku mas a minha qualidade fica péssima lá,Me ajude...`,
      `😎 Sabia que eu sou open-source? | github.com/MrGamingBR/SweetBot`
  ],
   i = 0
   setInterval(() => this.user.setActivity(`${status[i++ % status.length]}`, {
    type: "STREAMING",
    url: "https://www.twitch.tv/mrgamingbr0001"
    }), 10000)

   console.log(`${this.user.username} iniciada com:
    ${this.users.cache.size} Usuários;
    ${this.guilds.cache.size} Guilds;
    ${this.commands.size} Comandos.`)
  }
}
