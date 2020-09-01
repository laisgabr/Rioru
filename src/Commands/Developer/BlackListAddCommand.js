module.exports = {
	config: {
		name: 'blacklistAdd',
		aliases: ['asunaban'], 
        description: "",
		category: "Developer"
	},
    run: async (client, message, args) => {
		/*
		const fs = require("fs")
		const { MessageEmbed } = require('discord.js')

		if (!['468817505318862882', '738509296131637378', '330879828683390976', '336946966929866752'].includes(message.author.id)) {
            return message.channel.send('Some daq');
    }

		const uuser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
		if(!uuser) {
			return message.reply("Mencione alguém ou Diga o id ou diga um Username")
		}
		let motivo = args.join(" ")
		if(args[0]) {
		  motivo = "Indefinido"
		}

		fs.writeFile("./src/Database/Blacklist.json", JSON.stringify(uuser.id), (err) => {
			if (err) console.log(err)
		})
		message.channel.send("Usuário Punido com sucesso!")
		const embedKK = new MessageEmbed()
		.setDescription(`Parece que o Pobre usuário conseguiu fazer Merda no dia de Hoje :pensive:
		
Voce foi banido de me usar!

Motivo: ${motivo}

Quem Puniu: ${message.author.tag}
		`)
		uuser.send(embedKK)

		const Embed = new MessageEmbed()
		.setTitle(`Parece que alguém foi pra Blacklist :thumbsup: :pensive:`)
		.setDescription(`
		${uuser.tag}(\`${uuser.id}\`) Não poderá mais me Utilizar.
		
		Motivo: ${motivo}

		Quem Puniu: ${message.author}
		`)
		client.channels.cache.get("750071897957466253").send(Embed)
		*/
		message.channel.send("Comando desativado!")
    }
}