module.exports = {
	config: {
		name: 'ajuda',
		aliases: ['help'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
		
		const Discord = require('discord.js');
        const embedAjuda = new Discord.MessageEmbed()
		 .setTitle(`Olá meu nome é Yuuki Asuna e sou um Bot Discord focado em deixar tudo em Linha e Divertido`)
		 .setDescription(`Espere todos os Emojis carregar para reagir`)
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
		 .addField(`----------------------------`, `Página: 1/9`)
		 .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
	   
	 }
}	