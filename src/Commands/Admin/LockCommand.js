module.exports = {
	config: {
		name: 'lock',
		aliases: ['travar', 'bloqueiar'], 
        description: "",
		category: "Admin"
	},
    run: async (client, message, args) => {
        const Discord = require('discord.js')

 if(!message.member.hasPermission("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
    return message.reply(`<@${message.author.id}>, Você não tem as Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar!`);
    } else if(!message.guild.me.permissions.has("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
      return message.reply("Eu não tenho a Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar")
    } else {
    
    message.channel.overwritePermissions(message.guild.roles, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
    });

       const embedLock = new Discord.MessageEmbed()
       .setTitle(`<a:verificado_fs:733872377569607773> Canal Bloqueiado com Sucesso!!  Use ya!unlock para Desbloqueiar o canal`)
       .setColor("RED")
        const msg = await message.channel.send(embedLock)
        await msg.react('🍪')
    }
    }
}