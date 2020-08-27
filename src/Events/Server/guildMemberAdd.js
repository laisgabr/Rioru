module.exports = async(membro, client, guild) => {
    
     const { MessageEmbed } = require('discord.js')
        
        const embed = new MessageEmbed()
        .setTitle(`${membro.tag} entrou no Servidor!`)
        .setDescription(`Seja bem-vindo(a) ${membro} ao meu Servidor de Suporte.`)
        .setThumbnail(membro.user.displayAvatarURL({ dynamic: true, size: 2048 }))
        .addField("Por favor leia as Regras para não ser Punido", "Fique de olho nas Novidades :3")
        client.channels.cache.get("748356410152058971").send(embed)

}