const { Listener } = require('../../structure')
const { LavalinkLoader } = require('../../loader')
const { ErelaClient } = require('erela.js')

module.exports = class ReadyListener extends Listener {
  constructor () {
    super({
      name: 'ready',
      once: true
    })
  }

 async run () {
  this.lavalink = new ErelaClient(this, this.config.nodes, { autoPlay: true })
    await new LavalinkLoader(this.lavalink).load()

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
    ${this.users.cache.size} Usuários,
    ${this.guilds.cache.size} Servidores,
    ${this.commands.size} Comandos.`)
  }
}
