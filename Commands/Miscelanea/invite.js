module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js')
    const invite = "https://discord.com/api/oauth2/authorize?client_id=711341613930250330&permissions=8&scope=bot"

    const EmbedI = new Discord.MessageEmbed()
    .setTitle(`Clique Aqui para me Adicionar no seu Servidor`)
    .setColor("RED")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=711341613930250330&permissions=8&scope=bot`)
    .setThumbnail(bot.user.displayAvatarURL({ size: 2048, dynamic: true }))
    .addField(`Gostaria de te Agradecer ${message.author.username},Pois isso me ajuda muito a crescer, muito obrigada de coração`, `S2`)
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ size: 2048, dynamic: true }))

    message.channel.send(EmbedI)
}