
module.exports = {
	config: {
		name: 'teste',
		aliases: [], 
        description: "",
		category: "Fun"
	},
    run: async (client, message, args) => {
        
try {    
const Discord = require('discord.js')

    const prefix = '!'

    const initpage = // Página Inicial 
    new Discord.MessageEmbed()
    .setTitle(`Escolha alguma das opcões:`)
    .setDescription(`Olá, Meu nome é Yuuki Asuna e sou um Bot Discord focado em deixar tudo em Linha e Divertido.`)
    .setFooter(`Pedido por ${message.author.username}`, message.author.displayAvatarURL())
    .setThumbnail('https://cdn.discordapp.com/avatars/711341613930250330/88b13591644581fe8dd466c6315ff49a.png')
    
   
    const pag1 = 
    new Discord.MessageEmbed()
    .setTitle(`👑 **| Meus Comandos de Administração para o seu servidor**`)
    .setDescription(`Meus comandos de Administração são:\n${prefix}clear\n${prefix}lock\n${prefix}unlock`) 
    .setFooter(`Pedido por ${message.author.username}`, message.author.displayAvatarURL())
    
    const pag2 =
    
    new Discord.MessageEmbed()
    .setTitle(`💸 **| Comandos de Economia**`)
    .setDescription(`Meus comandos de economia são:\n ${prefix}coins\n${prefix}daily\n${prefix}pay\n\nPág 3/9`)
    .setFooter(`Pedido por ${message.author.username}`, message.author.displayAvatarURL())
    
    /* 
    __ Farei depois de concertar a porra da seta filha da puta do caraio
    const pag3 
    const pag4
    const pag5
    */

   message.channel.send(initpage).then(async msg => {
    
    await msg.react('👑')
    await msg.react('💸')
    await msg.react('➡️')
    
    // Reaction Collector Filters
    const adminfilter = (reaction, user) => reaction.emoji.name === '👑' && user.id === message.author.id;
    const EconomiaFilter = (reaction, user) => reaction.emoji.name === '💸' && user.id === message.author.id;
    const SetaFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
    // Reaction Collector
    const admin = msg.createReactionCollector(adminfilter, { time: 1800000 }) // 1800000 = 30 minutos
    const Economia = msg.createReactionCollector(EconomiaFilter, { time: 1800000 })
    const Seta = msg.createReactionCollector(SetaFilter, {time: 1800000 })
    
    admin.on('collect', async client => {
        await msg.edit(pag1)
    })
    
    Economia.on('collect', async client => {
        await msg.edit(pag2)
    })
    
    Seta.on('collect', async client => {
        if(msg === initpage) {
            await msg.edit(pag1)
        }
      })
    })
} catch (err) {
    console.error(err)
}
  }
}
