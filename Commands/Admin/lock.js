module.exports.run = async(bot, message, args) => {

const Discord = require('discord.js')

 if(!message.member.hasPermission("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
    return message.reply(`<@${message.author.id}>, Você não tem as Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar!`);
    } else {
    
    let canal = message.channel;
    let roles = message.guild.roles;
    
    canal.overwritePermissions(roles, {
    SEND_MESSAGES: false,
    ADD_REACTIONS: false
    })
       
        message.guild.channels.cache.forEach(f => {
            f.overwritePermissions(role, {
                SEND_MESSAGES: false
            });
        });
       const embedLock = new Discord.MessageEmbed()
       .setTitle(`<a:verificado_fs:733872377569607773> Canal Bloqueiado com Sucesso!!  Use ya!unlock para Desbloqueiar o canal`)
       .setColor("RED")
        const msg = await message.channel.send(embedLock)
        await msg.react('🍪')
 
    }
}