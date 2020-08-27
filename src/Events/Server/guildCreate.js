module.exports = async (client, guild) => {
    const { MessageEmbed } = require('discord.js')

    const embed = new MessageEmbed()
    .setTitle("Fui adicionada em um servidor :D")
    .setDescription(`Nome do Servidor: ${guild.name}(${guild.id})` )
    .addField(`Dono(a) do Servidor: `, `${guild.owner.user.tag}(${guild.owner.id})`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    client.channels.cache.get("748356411422933004").send(embed)
    
}