module.exports.run = async(bot, message, args, dc, err) => {
    const embed = new dc.MessageEmbed()
    .setTitle(`Event Log`)
    .setDescription(`Deu algum erro ao executar o Comando, Desculpe pela a inconveniencia :pensive:`)
    .addField(`Erro: `, `${err}`)
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
   return message.channel.send(embed)
}
