/* eslint-disable indent */
/* eslint-disable quotes */
module.exports = class Command {
  constructor (client, options) {
    this.client = client

    this.name = options.name
    this.aliases = options.aliases || 'Não tem aliases.'
    this.description = options.description || 'Não tem descrição.'
    this.usage = options.usage || 'Sem Metodo de Usar.'
    this.category = options.category || 'Não Listado'
    this.devOnly = options.devOnly || false
    this.voiceChannelOnly = options.voiceChannelOnly || false
    this.queueOnly = options.queueOnly || false
  }

  preLoad (ctx) {
    if (this.devOnly && !this.client.config.owners.includes(ctx.author.id)) {
      return ctx.channel.send('Este comando se encontra disponível apenas para meus donos.')
    }
    if (this.voiceChannelOnly) {
      if (!ctx.member.voice.channel) {
        return ctx.channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')
      }
    }
    if (this.queueOnly && !ctx.guild.music.queue[0]) {
      return ctx.channel.send('Não tem nenhuma música tocando')
    }
    /*
    if (this.queueOnly && !this.player.queue[0]) {
      return ctx.channel.send(`Não há músicas tocando.`)
    }
    */

    try {
      this.run(ctx)
    } catch (error) {
      console.error(error)
    }
  }

  run () {}
}
