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
    this.playerOnly = options.playerOnly || false,
    this.playingOnly = options.playingOnly || false,

    this.nsfwChannelOnly = options.nsfwChannelOnly || false
  }

 async preLoad (ctx) {   
    const db = await require('firebase').database().ref(`Servidores/${ctx.guild.id}/Locale`).once('value')
    if(db.val() === null) {
     await require('firebase').database().ref(`Servidores/${ctx.guild.id}/Locale`).set({ Language: "pt-BR" })
    }

    const player = this.client.lavalink.players.get(ctx.guild.id)
   
   if(db.val().Language === 'en-US') {
    if (this.devOnly && !this.client.config.owners.includes(ctx.author.id)) {
      return ctx.channel.send('<:xSweet:756989900661850182> | This command is only available for my owners.')
    }  

    if(this.playerOnly && !player) {
       return ctx.channel.send('<:xSweet:756989900661850182> | There is no Player on this Server!')
    } 

    if(this.playingOnly && !player.playing) {
      return ctx.channel.send('<:xSweet:756989900661850182> | Not have nothing playing on this server')
    }

    if(this.voiceChannelOnly && !ctx.member.voice.channel) {
     return ctx.channel.send('<:xSweet:756989900661850182> | You need to be on a voice channel or the same as me.')
    }

    if(this.nsfwChannelOnly && ctx.channel.nsfw === false) {
      return ctx.channel.send(`:underage: | This channel does not have the NSFW option active.`, { files: [{ attachment: './Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
    }
   } else {
  
      if (this.devOnly && !this.client.config.owners.includes(ctx.author.id)) {
      return ctx.channel.send('<:xSweet:756989900661850182> | Este comando se encontra disponível apenas para meus donos.')
    }

    if(this.playerOnly && !player) {
       return ctx.channel.send('<:xSweet:756989900661850182> | Não tem nenhum player nesse Servidor!')
    } 

    if(this.playingOnly && !player.playing) {
      return ctx.channel.send('<:xSweet:756989900661850182> | Não tem nada tocando nesse Servidor')
    }

    if(this.voiceChannelOnly && !ctx.member.voice.channel) {
     return ctx.channel.send('<:xSweet:756989900661850182> | Você precisa estar em um canal de voz ou no mesmo que eu.')
    }

    if(this.nsfwChannelOnly && ctx.channel.nsfw === false) {
      return ctx.channel.send(`:underage: | Esse canal não tem a função Canal Nsfw ativada!`, { files: [{ attachment: './Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
    }
  }    
    try {
      this.run(ctx)
    } catch (error) {
      console.error(error)
    }
  }

  run () {}
}
