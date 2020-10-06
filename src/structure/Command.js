module.exports = class Command {
  constructor (client, options) {
    this.client = client

    this.name = options.name
    this.aliases = options.aliases || []
    this.description = options.description || 'Não tem descrição.'
    this.usage = options.usage || 'Sem Metodo de Usar.'
    this.category = options.category || 'Não Listado'
    this.devOnly = options.devOnly || false,
    this.voiceChannelOnly = options.voiceChannelOnly || false,
    this.playerOnly = options.playerOnly || false
  }

  preLoad (ctx) {   
    if (this.devOnly && !this.client.config.owners.includes(ctx.author.id)) {
      return ctx.channel.send('Este comando se encontra disponível apenas para meus donos.')
    }

    const player = this.client.lavalink.players.get(ctx.guild.id)
    if(this.playerOnly && !player) {
       return ctx.channel.send('KKKJ')
    } 

    if(this.voiceChannelOnly && !ctx.member.voice.channel) {
     return ctx.channel.send('Bah')
    }
    
    try {
      this.run(ctx)
    } catch (error) {
      console.error(error)
    }
  }

  run () {}
}
