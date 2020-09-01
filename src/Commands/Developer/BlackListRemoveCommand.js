module.exports = {
	config: {
		name: 'BlacklistRemove',
		aliases: ['asunaunban'], 
        description: "",
		category: "Developer"
	},
    run: async (client, message, args) => {
		if (!['468817505318862882', '738509296131637378', '330879828683390976', '336946966929866752'].includes(message.author.id)) {
            return message.channel.send('Some daq');
    }
		/*
		const uuser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
		if(!uuser) {
			return message.reply("Mencione alguém ou Diga o id ou diga um Username")
		}
		*/
		message.channel.send("Comando em construção")
    }
}