module.exports = async(membro, client, guild) => {
    if(guild !== "746434115682828469") {
     console.log("Server errado")
    } else {
        const { MessageEmbed } = require('discord.js')
        
        const embed = new MessageEmbed()
        .setTitle(`${membro.tag} entrou no Servidor!`)
        .setDescription(`Seja bem-vindo(a) ${membro} ao meu Servidor de Suporte.`)
        .addField("Por favor leia <#")
    }
}