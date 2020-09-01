module.exports = {
	  config: {
		name: 'unlock',
		aliases: ['destravar', 'desbloqueiar'], 
    description: "",
		category: "Admin"
	},
  run: async (client, message, args) => {
  try {
  const Discord = require('discord.js')           
  
  if(!message.member.hasPermission("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
  return message.reply(`<@${message.author.id}>, Você não tem as Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar!`);
  } else if(!message.guild.me.permissions.has("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
  return message.reply("Eu não tenho a Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar")
  } else {              
  
    await message.channel.updateOverwrite(message.guild.roles.everyone, {
      SEND_MESSAGES: true
});
  
  const embedLock = new Discord.MessageEmbed()
  .setTitle(`<a:verificado_fs:733872377569607773> Canal Desbloqueado com Sucesso!!`)
  .setColor("RED")
  const msg = await message.channel.send(embedLock)
  await msg.react('🍪')
   }           
  } catch (err) {
  
    console.error("Erro: " + err)
  const dc = require('discord.js')
  const embedErro = new dc.MessageEmbed()
  .setTitle(`Event Log`)
  .setDescription(`Aconteceu algum erro aqui, Desculpa pela inconveniencia :pensive:`)
  .addField(`Erro: `, `${err}`)
  .setTimestamp()
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  return message.channel.send(embedErro)
  }
            
    }
}