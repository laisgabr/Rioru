module.exports.run = async(bot, message, args) => {
    const { MessageEmbed } = require('discord.js')
    const user = args[0] ? message.mentions.users.first() || await this.bot.users.fetch(args[0]).catch(_ => message.author) : message.author
    const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 })
  

    const embed = new MessageEmbed()
      .setTitle(`<:foto:733732004817797234> Avatar De ${user.username}`)
      .setDescription(`Clique [Aqui](${avatar}) para Baixar o Avatar`)
      .setImage(avatar)
      .setColor('DB7093')
      .setFooter(`• Autor: ${message.author.tag}`)
    message.channel.send(embed)
}