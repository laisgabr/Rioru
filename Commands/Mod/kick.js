const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    message.delete()
    if(!message.member.permissions.has("KICK_MEMBERS")) {
      return message.reply("Você não tem a permissão Expulsar Membros")
    }
  
    if(!message.guild.me.permissions.has("KICK_MEMBERS")) {
      return message.reply("Eu não tenho a permissão Expulsar Membros")
    }
  
    let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!membro) return message.reply("Você precisa mencionar alguem!")
    if(membro.user.id === message.author.id) {
      return message.reply("Você não pode se Expulsar!")
    }
    if(membro.user.id === bot.user.id) {
      return message.reply("Por que você quer me Expulsar ?") 
    }
    if(!membro.bannable) {
      return message.reply("Eu não posso Expulsar este Membro,Ele pode ter um cargo maior ou igual ao meu")
    }
    
    let motivo = args.slice(1).join(" ")
    if(!motivo) motivo = "Não Definido"
   
     const msg = await message.channel.send(`<@${message.author.id}>, Você quer mesmo Expulsar ${membro.user.tag} ? Clique em uma das reações abaixo! `)
     await msg.react('✅')
     await msg.react('❌')
     
     const sim = (reaction, user) => reaction.emoji.name ===  '✅' && user.id === message.author.id;
     const no = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id
     const collectorDaMsg = msg.createReactionCollector(sim)
     const collectorNo = msg.createReactionCollector(no)
  
     collectorDaMsg.on('collect', r => {
      msg.delete()
      membro.kick({reason: motivo})
      const embed = new Discord.MessageEmbed()
      .setTitle(":fire:Membro(a) Expulso(a)!:fire:")
      .setColor("RED")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
      .addField("👤 Expulso(a) :", membro.user.tag, false)
      .addField("👮‍♂️ Quem Puniu:", message.author.tag, false)
      .addField("📜 Motivo:", motivo, false)
      .setTimestamp()
      .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048}))
  
       const abs = await message.channel.send(embed)
       await abs.react('🍪')
     });
  
     collectorNo.on('collect', r => {
       msg.delete()
     })

}
