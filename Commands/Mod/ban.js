const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
  message.delete()
  if(!message.member.permissions.has("BAN_MEMBERS")) {
    return message.reply("Você não tem a permissão necessária!")
  }

  if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
    return message.reply("Eu não tenho a permissão necessária!")
  }

  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("Você precisa mencionar alguem!")
  if(membro.user.id === message.author.id) {
    return message.reply("Você não pode se banir!")
  }
  if(membro.user.id === bot.user.id) {
    return message.reply("Por que você quer me banir?")
  }
  if(!membro.bannable) {
    return message.reply("Eu não posso banir este membro,Ele pode ter um cargo maior que o meu ou eu tenho permissão para banir !")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"
 
   const msg = await message.channel.send(`<@${message.author.id}>, Você quer mesmo banir ${membro.user.tag} permanentemente? Clique em uma das reações abaixo! `)
   await msg.react('✅')
   await msg.react('❌')
   
   const sim = (reaction, user) => reaction.emoji.name ===  '✅' && user.id === message.author.id;
   const no = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id
   const collectorDaMsg = msg.createReactionCollector(sim)
   const collectorNo = msg.createReactionCollector(no)

   collectorDaMsg.on('collect', r => {
    membro.ban({reason: motivo})
    msg.delete()
    const embed = new Discord.MessageEmbed()
    .setTitle(":fire:Membro(a) Banido(a)!:fire:")
    .setColor("#bb00ff")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    .addField("👤 Banido(a) :", membro.user.tag, false)
    .addField("👮‍♂️ Quem Puniu:", message.author.tag, false)
    .addField("📜 Motivo:", motivo, false)
    .setTimestamp()
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048}))

   const messageA = await message.channel.send(embed)
    await messageA.react('🍪')
   });

   collectorNo.on('collect', r => {
     msg.delete()
   })
}