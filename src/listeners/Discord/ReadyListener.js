/* eslint-disable one-var */
/* eslint-disable indent */
/* eslint-disable quotes */
const { AsunaManager, AsunaPlayer } = require('../../Music')
const { Listener } = require('../../structure')
const { LavalinkLoader } = require('../../loader')

module.exports = class ReadyListener extends Listener {
  constructor () {
    super({
      name: 'ready',
      once: true
    })
  }

 async run () {
    this.lavalink = new AsunaManager(this, this.config.nodes, {
      Player: AsunaPlayer
    })
    await new LavalinkLoader(this.lavalink).load()
/*
    const { GiveawaysManager } = require('discord-giveaways')
this.giveawaysManager = new GiveawaysManager(this, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
})

this.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entrou no sorteio #${giveaway.messageID} (${reaction.emoji.name})`)
})

this.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} Tirou a reação #${giveaway.messageID} (${reaction.emoji.name})`)
})
*/

    var status = [
      `Meu prefixo é y! ou ya! :D`,
      `Sabia que tenho um sistema de músicas em desenvolvimento ?`,
      `Me ajude por favor`,
      `Amo todos que me usam diariamente :)`,
      `Estou sendo desenvolvida pelo MrGamingBR#0001 esse lindo :3`,
      `Estou na versão Beta qualquer erro ou bug relate no Suporte`,
      `Open Source ? Sim!`
  ],
  i = 0
setInterval(() => this.user.setActivity(`${status[i++ % status.length]}`, {
  type: "STREAMING",
  url: "https://www.twitch.tv/mrgamingbr0001"
}), 15000)

    console.log(`${this.user.username} iniciada com:
    ${this.users.cache.size} Usuários;
    ${this.guilds.cache.size} Guilds;
    ${this.commands.size} Comandos.`)
  }
}
