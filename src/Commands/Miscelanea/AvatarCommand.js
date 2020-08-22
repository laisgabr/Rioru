module.exports = {
	config: {
		name: 'avatar',
		aliases: ['av'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    const user = args[0] ? message.mentions.users.first() || await client.users.fetch(args[0]).catch(_ => message.author) : message.author
    const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 })
  

    const embed = new MessageEmbed()
      .setTitle(`<:foto:733732004817797234> Avatar De ${user.username}`)
      .setDescription(`Clique [Aqui](${avatar}) para Baixar o Avatar`)
      .setImage(avatar)
      .setColor("RANDOM")
      .setFooter(`• Solicitado por: ${message.author.username}`)
    message.channel.send(embed)
    }
}