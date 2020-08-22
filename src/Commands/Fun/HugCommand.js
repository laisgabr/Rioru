module.exports = {
	config: {
		name: 'hug',
		aliases: ['abraçar'], 
        description: "",
		category: "Fun"
	},
run: async (client, message, args) => {
    const Discord = require('discord.js')
    const superagent = require('superagent')

    const uuser = message.mentions.users.first() || client.users.cache.get(args[0])

    if(!uuser) return message.reply("Mencione alguém por favor")

    superagent.get('https://nekos.life/api/v2/img/hug')
    .end((err, response) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} Abraçou ${uuser} :3 | Own X3`)
    .setImage(response.body.url)
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(embed)
    })
   }
 };