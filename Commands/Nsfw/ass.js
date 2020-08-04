module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js') 
    const superagent = require('superagent')    

    if (message.channel.nsfw === true) {
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'ass'})
        .end((err, response) => {
            const embed = new Discord.MessageEmbed()
            .setImage(response.body.message)
            .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
            message.channel.send(embed);
        });
      } else {
        message.channel.send("Esse canal não é de NSFW +18")
      }
}