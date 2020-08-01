const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    var lista = [
        'https://cdn.glitch.com/ab36d9a8-5d53-4bcb-a6b9-4dc03c4d8ce0%2Fgif1.gif?v=1594495685662',
        'https://cdn.glitch.com/ab36d9a8-5d53-4bcb-a6b9-4dc03c4d8ce0%2Fgif2.gif?v=1594495979573',
        'https://cdn.glitch.com/ab36d9a8-5d53-4bcb-a6b9-4dc03c4d8ce0%2Fgif3_1.gif?v=1594496168972',
        'https://cdn.glitch.com/ab36d9a8-5d53-4bcb-a6b9-4dc03c4d8ce0%2Fgif4.gif?v=1594496640245'
    ];

    var randomA = lista[Math.floor(Math.random()  * lista.length)];
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    if (!user) {
        return message.reply("Mencione alguem né :v")
    }

    let avatar = message.author.displayAvatarURL({ dynamic: true, size: 2048 })
     const embedKiss = new Discord.MessageEmbed()
     .setTitle(`:heart: O Amor está no ar :heart:`)
     .setDescription(`:heart: ${message.author} Beijou ${user} :heart:`)
     .setColor("RED")
     .setImage(randomA)
     .setTimestamp()
     .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
     .setFooter(`Solicitado por ${message.author.username}`, `${avatar}`)

     await message.channel.send(embedKiss)
    }
