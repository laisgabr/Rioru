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
		.setDescription(`\`Clear\`, \`Lock\`, \`Unlock\`.`)
        .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))

		const EmbedFun = new MessageEmbed()
		.setTitle(`Categoria Fun`)
		.setColor("YELLOW")
		.setDescription(`\`Banido\`, \`Headpat\`, \`Hug\`, Kiss, \`Laranjo\`, \`Marry\`, \`PP\`, \`Ship\`, \`Slap\`.`)
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))
	const EmbedEco = new MessageEmbed()
	.setTitle("Comandos de Economia")
	.setColor("GREEN")
	.setDescription(`Comandos desativados..`)
	.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))

		const EmbedMisc = new MessageEmbed()
		.setTitle("Comandos de Miscelanea")
		.setColor("CYAN")
		.setDescription(`\`Avatar\`, \`Calculadora\`, \`Configs\`, \`Docs\`, \`Donate\`, \`Info\`, \`Invite\`, \`Lembrete\`, \`Level\`, \`Ping\`, \`Say\`, \`Serverinfo\`, \`SetNick\`, \`SetPrefix\`, \`Steam\`, \`Uptime\`, \`Userinfo\`.`)
		.setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


		 // embed Mod
		const EmbedMod = new MessageEmbed()
	   .setTitle(`Comandos de Moderação`)
	   .setColor("BLUE")
	   .setDescription(`\`Ban\`, \`Kick\`, \`Mute\`, \`Unban\`, \`Unmute\``)
	   .setThumbnail("https://cdn.discordapp.com/attachments/656602609481809941/749450510645461112/emote.png")
	   .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))



	const EmbedMusic = new MessageEmbed()
	  .setTitle("Comandos de Música")
    .setColor('RANDOM')
    .setDescription(`\`Bassboost\`, \`Join\`, \`Leave\`, \`Loop\`, \`Now Playing\`, \`Pause\`, \`Play\`, \`Queue\`, \`Resume\`, \`Skip\`, \`Volume\``)
    .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))



// embed nsfw
const EmbedNSFW = new MessageEmbed()
.setTitle(`Comandos de NSFW +18`)
.setColor("RED")
.setDescription(`\`4k\`, \`Anal\`, \`Ass\`, \`Blowjob\`, \`Boobs\`, \`Cosplay\`, \`Cumsluts\`, \`Gif\`, \`Hentaianal\`, \`Hentai\`, \`Holo\`, \`Kuni\`, \`Lesbian\`, \`Neko\`, \`Pussy\`, \`Thigh\`, \`Trans\`, \`Trap\`, \`Yaoi\` ,\`Yuri\`.`)
 .setThumbnail("https://cdn.discordapp.com/attachments/656602609481809941/749573230662254622/emote.png")
 .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


 const EmbedSorte = new MessageEmbed()
 .setTitle("Categoria Sorteio")
 .setColor("RED")
 .setDescription("Desativado por conta da Host Lixo :pensive: :fist:")
 .setFooter(author.username, author.displayAvatarURL({ dynamic: true, size: 2048 }))


		const EmbedAjuda = new MessageEmbed()
		 .setTitle(`Olá meu nome é SweetBot e sou um Bot que faz tudo para você em seu Servidor.`)
		 .setColor("BLUE")
		 .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
		 .setDescription(`
		 📂 Administração - \`Clear\`, \`Lock\`, \`Unlock\`...

🎁 Diversão - \`Hug\`, \`Kiss\`, \`Pat\`...

💸 Economia - \`Temporariamente Desativado\`...

🌐 Miscelanea - \`Avatar\`, \`Ping\`, \`Userinfo\`, \`Steam\`...

👮‍♂️ Moderação - \`Ban\`, \`Kick\`, \`Mute\`...

🎶 Música - \`Play\`, \`Skip\`, \`Queue\`...

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

       const Administrar = (reaction, user) => reaction.emoji.name === '📂' && user.id === author.id;
       const Adm = msg.createReactionCollector(Administrar)

       const Diver = (reaction, user) => reaction.emoji.name === '🎁' && user.id === author.id;
	   const Fun = msg.createReactionCollector(Diver)

       const Economia = (reaction, user) => reaction.emoji.name === '💸' && user.id === author.id;
	   const Eco = msg.createReactionCollector(Economia)

	   const Miscelanea = (reaction, user) => reaction.emoji.name === '🌐' && user.id === author.id;
	   const Misc = msg.createReactionCollector(Miscelanea)

	   const Moderar = (reaction, user) => reaction.emoji.name === '👮‍♂️' && user.id === author.id;
	   const Mod = msg.createReactionCollector(Moderar)

	   const Musica = (reaction, user) => reaction.emoji.name === '🎶' && user.id === author.id;
	   const Music = msg.createReactionCollector(Musica)

	   const NotSafe = (reaction, user) => reaction.emoji.name === '🔞' && user.id === author.id;
	   const NSFW = msg.createReactionCollector(NotSafe)

	   const Giveaway = (reaction, user) => reaction.emoji.name === '🎉' && user.id === author.id;
	   const Sorte = msg.createReactionCollector(Giveaway)

	   const Seta = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === author.id;
	   const Voltar = msg.createReactionCollector(Seta)
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
