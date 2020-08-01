module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js');
    const moment = require('moment');
    moment.locale("pt-BR")
     
    const ServerEmb = new Discord.MessageEmbed()
    .setTitle(`Informações sobre ``${message.guild.name}```)
    .setColor("RED")
    .addField("📝 Nome do Servidor :", ```${message.guild.name}```)
    .addField("Id do Servidor :", ```${message.guild.id}```)
    .addField(`<:owner:723567257552420905> Dono do Servidor :`, ```${message.guild.owner}```)
    .addField(`<:owner:723567257552420905> Id do Dono`, ```${message.guild.owner.id}```)
    .addField("🏳 Região do Servidor :", ```${message.guild.region}```)
    .addField("📆 Servidor criado em :", ```${moment(message.guild.createdAt).format("LLL")}```)
    .addField("Você entrou aqui em :", ```${moment(message.member.joinedAt).format("LLL")}```)
    .addField("Eu entrei aqui em :", `${moment(bot.joinedAt).format("LLL")}`)
    .addField("👥 Total de Membros do Servidor :", `${message.guild.memberCount}`)
    .setThumbnail(message.guild.iconURL(), true)
    .setTimestamp()
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(ServerEmb)
}