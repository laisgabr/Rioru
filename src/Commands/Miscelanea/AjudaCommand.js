const { LavalinkNode } = require('gorilink');

module.exports = {
	config: {
		name: 'ajuda',
		aliases: ['help'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
		const { MessageEmbed } = require('discord.js');
		
		const EmbedMod = new MessageEmbed()
	   .setTitle(`Comandos de Moderação`)
	   .setColor("BLUE")
	   .setDescription(`
		Ban - Cansado de um membro chato ? Use esse comando!
		Kick - Expulse alguém do seu Servidor!
		Mute - Mute algum membro chato e bagunçeiro 
		Unban - Desbane algum usuário pelo id
		Unmute - Desmuta o usuário mencionando se ele estiver mutado!
	   `)
	   .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

		
		const embedAjuda = new MessageEmbed()
		 .setTitle(`Olá meu nome é Yuuki Asuna e sou um Bot Discord focado em deixar tudo em Linha e Divertido`)
		 .setColor("BLUE")
		 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
		 .addField('Reaja aos emojis abaixo para saber sobre tal categoria', `----------------------------`)
		 .addField("Minhas Categorias: ", `----------------------------`)
		 .addField('👮‍♂️ Moderação', `ya!mod`)
		 .addField('📂 Administração', `ya!admin`)
		 .addField('🎶 Música', "ya!music")
		 .addField('🎁 Diversão', `ya!fun`)
		 .addField('💸 Economia', `ya!economy`)
		 .addField('🎉 Sorteio', `ya!sorteio`)
		 .addField('🌐 Miscelanea', `ya!miscelanea`)
		 .addField('🔞 NSFW +18', `ya!nsfw`)
		 .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
	   message.channel.send(embedAjuda).then(async msg => {
	   msg.react('👮‍♂️')
	   msg.react('📂')
	   msg.react('🎶')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🎉')
	   msg.react('🌐')
	   msg.react('🔞')

// ⬅️ ➡️
	   const Moderar = (reaction, user) => reaction.emoji.name === '👮‍♂️' && user.id === message.author.id;
	   const Mod = msg.createReactionCollector(Moderar)  
	   
	   const Administrar = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
       const Adm = msg.createReactionCollector(Administrar)
	   
	   const Musica = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
	   const Diver = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
  
	   const Fun = msg.createReactionCollector(Diver)
	   const Music = msg.createReactionCollector(Musica)
	   const ademiro = msg.createReactionCollector(admVolt)
	   const prox56A = msg.createReactionCollector(prox56)
	   
	   Mod.on('collect', async msg => {
		if(msg === embedAjuda) {
			await msg.edit(EmbedMod)
			msg.reactions.removeAll()
		}
	   })
	   msg.reactions.remove(message.author.id)
	  })

	 }
}	