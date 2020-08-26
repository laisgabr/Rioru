module.exports = {
	config: {
		name: 'skip',
		aliases: ['pular'], 
        description: "",
		category: "Music"
	},
    run: async (client, message, args) => {
	const channel = message.channel
	const member = message.member
	const guild = message.guild
	
	const memberCount = member.voice.channel.members.filter(x => !x.user.bot).size
    const required = Math.ceil(memberCount / 2)
	
	if (!message.guild.music.queue[0].skipVotes) message.guild.music.queue[0].skipVotes = []

    if (message.guild.data.djRole && member.roles.cache.has(message.guild.data.djRole)) {
      message.guild.music.stop()
      return message.channel.sendTempMessage(' | Música pulada com sucesso.')
    }

    if (message.guild.music.queue[0].skipVotes.includes(member.id)) {
      return message.channel.sendTempMessage(' | Você já votou.')
    }

    message.guild.music.queue[0].skipVotes.push(member.id)

    if (guild.music.queue[0].skipVotes.length >= required) {
      guild.music.stop()
      return channel.sendTempMessage(' | A votação venceu! A música foi pulada com sucesso.')
    }

    const voteLength = guild.music.queue[0].skipVotes.length

    return channel.sendTempMessage(' | Você votou com sucesso! ' + voteLength + '/' + required + '.')
    }
}