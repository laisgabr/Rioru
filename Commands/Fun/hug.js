module.exports.run = async(bot, message, args) => {
     const Discord = require('discord.js')

    var listaa = [
        '',
        '',
        '',
        '',
        '',
        ''
    ];

    var randomAB = listaa[Math.floor(Math.random()  * listaa.length)];
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    if (!user) {
        return message.reply("Mencione alguem né :v")
    }

    let avatar = message.author.displayAvatarURL({ dynamic: true, size: 2048 })
     const embedHug = new Discord.MessageEmbed()
     .setTitle(`Abraço de Amigo(a) ;3`)
     .setDescription(`${message.author} Abraçou ${user} :3 | Own X3`)
     .setColor("PURPLE")
     .setImage(randomAB)
     .setTimestamp()
     .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
     .setFooter(`Solicitado por ${message.author.username}`, `${avatar}`)

     await message.channel.send(embedHug)
}