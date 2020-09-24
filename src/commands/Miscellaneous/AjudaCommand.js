const { Command } = require('../../structure')

module.exports = class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ajuda',
	  aliases: ['help'],
      description: 'Lista todos os meus comandos',
      usage: '<prefix>ajuda',
      category: 'Miscellaneous'
    })
  }

  async run ({ channel, client, author }) {
    const { MessageEmbed } = require('discord.js');
		const EmbedAdm = new MessageEmbed()
		.setTitle(`Comandos de Administração`)
		.setThumbnail("https://cdn.discordapp.com/attachments/656602609481809941/749604296743583795/emote.png")
		.setColor("ORANGE")
		.setDescription(`_
		Clear: 
		**Chat floodado ? Use esse comandos** 
		
		Exemplo de como usar :
		***ya!clear 99***
		
		
		Lock:
		**Feche o canal que está sendo floodado ou badernado! KKKK**
		
		Exemplo de como usar :
		***ya!lock***
		
	
		Unlock: 
		**Destranca o chat** 
		
		Exemplo de como usar :
		***ya!unlock***
		
		`)
        .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
	   
		const EmbedFun = new MessageEmbed()
		.setTitle(`Categoria Fun`)
		.setColor("YELLOW")
		.setDescription(` _
		Hug: 
		**De um abraço em alguém!** 
		
		Exemplo de como usar :
		***ya!hug @MrGamingBR***
		
		
		Kiss:
		**De um beijo em alguém!**
		
		Exemplo de como usar :
		***ya!kiss @Alguém***
		
		
		Headpat: 
		**Faça um cafuné em alguém** 
		
		Exemplo de como usar :
		***ya!headpat @MrGamingBR***
		
		
		Primeiraspalavras:  
		**Diga as primeiras palavras do bebe**
		
		Exemplo de como usar :
		***ya!primeiraspalavras Mãe Chata KKKKKKKKKK***
		
		
		Slap:
		**De um tapa em alguém!**
		
		Exemplo de como usar :
		***ya!slap @CaraQueTeDeveUmaBalinha***
		
		
		`)
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
	const EmbedEco = new MessageEmbed()
	.setTitle("Comandos de Economia")
	.setColor("GREEN")
	.setDescription(`Comandos desativados por causa da DB`)
	.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
		
		const EmbedMisc = new MessageEmbed()
		.setTitle("Comandos de Miscelanea")
		.setColor("CYAN")
		.setDescription(`_
		Avatar, Docs, Donate**, Invite, Ping, Say, Serverinfo, SetNick, Steam, Uptime, Userinfo.
		`)
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


		 // embed Mod
		const EmbedMod = new MessageEmbed()
	   .setTitle(`Comandos de Moderação`)
	   .setColor("BLUE")
	   .setDescription(` _
Ban: 
**Cansado de um membro chato ? Use esse comando!** 

Exemplo de como usar :
***ya!ban 468817505318862882 Chato KKKK***


Kick:
**Expulse alguém do seu Servidor!**

Exemplo de como usar :
***ya!kick @MrGamingBR Motivo bem aleátorio***


Mute: 
**Mute algum membro chato e bagunçeiro** 

Exemplo de como usar :
***ya!mute @MrGamingBR 10h***


Unban:  
**Desbane algum usuário pelo id**

Exemplo de como usar :
***ya!unban 468817505318862882 Não fez nada***


Unmute:
**Desmuta o usuário fornecido,seja mencionando/username/id se ele estiver mutado!**

Exemplo de como usar :
***ya!unmute @MrGamingBR***

	   `)
	   .setThumbnail("https://cdn.discordapp.com/attachments/656602609481809941/749450510645461112/emote.png")
	   .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))



	const EmbedMusic = new MessageEmbed()
	.setTitle("Comandos de Música")
	.setDescription("O MrGamingBR tá fazendo tudo sozinho né, então dá uma esperada ai bro")
    .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


	
// embed nsfw
const EmbedNSFW = new MessageEmbed()
.setTitle(`Comandos de NSFW +18`)
.setColor("RED")
.setDescription(` Como esses Comandos são Not Safe For Work +18, Vai ser apenas a Listagem dos Comandos de A-Z!

4k, Ahegao, Anal, Ass, Blowjob, Boobs, Cosplay, Cumsluts, Gay, Gif, Hentaianal, Hentai, Holo, Kuni, Lesbian, Lewd, Maid, Milf, Neko, Pussy, Random, Squirt, Thigh, Trans, Trap, Yuri.
`)
 .setThumbnail("https://cdn.discordapp.com/attachments/656602609481809941/749573230662254622/emote.png")
 .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


 const EmbedSorte = new MessageEmbed()
 .setTitle("Categoria Sorteio")
 .setColor("RED")
 .setDescription("Em construção :pensive:")
 .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


		const EmbedAjuda = new MessageEmbed()
		 .setTitle(`Olá meu nome é Yuuki Asuna e sou um Bot focado em deixar tudo em Linha e Divertido`)
		 .setColor("BLUE")
		 .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
		 .setDescription(`
		 📂 Administração - \`Clear\`, \`Lock\`, \`Unlock\`...

🎁 Diversão - \`Hug\`, \`Kiss\`, \`Pat\`...

💸 Economia - \`Temporariamente Desativado\`...

🌐 Miscelanea - \`Avatar\`, \`Ping\`, \`Userinfo\`, \`Steam\`...

👮‍♂️ Moderação - \`Ban\`, \`Kick\`, \`Mute\`...

🎶 Música - \`Em construção\`.....

🔞 NSFW +18 - \`4k\`, \`Hentai\`, \`Gif\`, \`Nekogif\`, \`Anal\`... 

🎉 Sorteio - \`Em construção\`...
`)
		 .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
	   channel.send(EmbedAjuda).then(async msg => {
	   ///////////////
	   msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
	   ///////////////
	   
// ⬅️ ➡️
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
       const Administrar = (reaction, user) => reaction.emoji.name === '📂' && user.id === author.id;
       const Adm = msg.createReactionCollector(Administrar, {time: 360000})
 
       const Diver = (reaction, user) => reaction.emoji.name === '🎁' && user.id === author.id;
	   const Fun = msg.createReactionCollector(Diver, {time: 360000})

       const Economia = (reaction, user) => reaction.emoji.name === '💸' && user.id === author.id;
	   const Eco = msg.createReactionCollector(Economia, {time: 360000})  
	   
	   const Miscelanea = (reaction, user) => reaction.emoji.name === '🌐' && user.id === author.id;
	   const Misc = msg.createReactionCollector(Miscelanea, {time: 360000})
	 
	   const Moderar = (reaction, user) => reaction.emoji.name === '👮‍♂️' && user.id === author.id;
	   const Mod = msg.createReactionCollector(Moderar, {time: 360000})

	   const Musica = (reaction, user) => reaction.emoji.name === '🎶' && user.id === author.id;
	   const Music = msg.createReactionCollector(Musica, {time: 360000})

	   const NotSafe = (reaction, user) => reaction.emoji.name === '🔞' && user.id === author.id;
	   const NSFW = msg.createReactionCollector(NotSafe, {time: 360000})

	   const Giveaway = (reaction, user) => reaction.emoji.name === '🎉' && user.id === author.id;
	   const Sorte = msg.createReactionCollector(Giveaway, {time: 360000})

	   const Seta = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === author.id;
	   const Voltar = msg.createReactionCollector(Seta, {time: 360000})
////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    Adm.on('collect', async r => {
		msg.reactions.removeAll()
		msg.edit(EmbedAdm)
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
			
			msg.react('📂')
	        msg.react('🎁')
	        msg.react('💸')
	        msg.react('🌐')  
	        msg.react('👮‍♂️')
	        msg.react('🎶')
	        msg.react('🔞')
            msg.react('🎉')
		})
	})

	Fun.on('collect', async r => {
		msg.edit(EmbedFun)
		msg.reactions.removeAll()
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
	   msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
		})
	})
	
	Eco.on('collect', async r => {
		msg.edit(EmbedEco)
		msg.reactions.removeAll()
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
			msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
		})
	})
	
	Misc.on('collect', async r => {
		msg.reactions.removeAll()
		msg.edit(EmbedMisc)
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
			msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
		})
	})
	  
	Mod.on('collect', async r => {
		msg.edit(EmbedMod)
		msg.reactions.removeAll()
		msg.react('⬅️')

	  Voltar.on('collect', async rr => {
		msg.reactions.removeAll()
		msg.edit(EmbedAjuda)
	    msg.react('📂')
	    msg.react('🎁')
	    msg.react('💸')
	    msg.react('🌐')  
	    msg.react('👮‍♂️')
	    msg.react('🎶')
	    msg.react('🔞')
        msg.react('🎉')
		})
	})
	   
	Music.on('collect', async r => {
		msg.reactions.removeAll()
		msg.edit(EmbedMusic)
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
			msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
		})
	})

	NSFW.on('collect', async r => {
		msg.edit(EmbedNSFW)
		msg.reactions.removeAll()
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
			msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
		})
	})

	Sorte.on('collect', async r => {
		msg.reactions.removeAll()
		msg.edit(EmbedSorte)
		msg.react('⬅️')

		Voltar.on('collect', async rr => {
			msg.reactions.removeAll()
			msg.edit(EmbedAjuda)
			msg.react('📂')
	   msg.react('🎁')
	   msg.react('💸')
	   msg.react('🌐')  
	   msg.react('👮‍♂️')
	   msg.react('🎶')
	   msg.react('🔞')
       msg.react('🎉')
		})
      })
       })
  }
}
