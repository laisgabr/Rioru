module.exports = {
	config: {
		name: 'kiss',
		aliases: ['beijar'], 
        description: "",
		category: "Fun"
	},
    run: async (client, message, args) => {
        const superagent = require('superagent')
        const Discord = require('discord.js')
        let uuser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
        if (!uuser) {
            return message.reply("Mencione ou mande um id ou digite um username")
        }
      
        if(uuser.id === client.user.id) return message.reply("Quero te beijar nah")
    
        superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`:heart: O amor está no Ar :heart:`)
            .setDescription(`:heart: ${message.author} Beijou ${uuser} :heart:`)
            .setImage(response.body.url)
            .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed)
        })
    }
}