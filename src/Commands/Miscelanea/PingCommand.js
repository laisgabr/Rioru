module.exports = {
	config: {
		name: 'ping',
		aliases: ['latencia'], 
    description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
		const { MessageEmbed } = require("discord.js")

		const embedA = new MessageEmbed()
      .setTitle(`🏓 Medindo meu Ping...`)
      .setDescription(`Um momento......`) 
      .setColor("RED")
      .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
      
      let m = await message.channel.send(embedA)
      
      const embedB = new MessageEmbed()
      .setTitle(`Meu Ping :3`)
      .setDescription(`Será que o Ping está bom ?`)
      .setColor("RED")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .addField(`🏓 Minha Latência é de`, `${m.createdTimestamp - message.createdTimestamp} ms`)
      .addField(`📡 Latência Da API é de`, `${Math.round(client.ws.ping)} ms`)
      .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

      m.edit(embedB)
    }
}