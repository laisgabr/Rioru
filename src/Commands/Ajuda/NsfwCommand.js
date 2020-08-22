module.exports = {
	config: {
		name: 'Nsfw',
		aliases: ['nsfw'], 
    description: "",
    category: "Ajuda" 
  	},
	run: async (client, message, args) => {
  const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .addField("Total de Comandos(`14`) :", "`4k`,`anal`,`ass`,`blowjob`,`boobs`,`gif`,`hentai`,`holo`,`lewd`,`maid`,`pussy`,`thigh`,`trap`,`yuri`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
  }
}