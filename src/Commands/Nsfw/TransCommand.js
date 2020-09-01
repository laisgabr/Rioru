module.exports = {
    config: {
        name: "trans",
        aliases: [],
        description: '',
        category: "Nsfw"
    },
    run: async(client, message, args) => {
        // https://love-you.xyz/api/v2/TIPO

        if(message.channel.nsfw === true) {
            const Discord = require('discord.js')
            const superagent = require('superagent')
            if (message.channel.nsfw === true) {
            superagent.get('https://love-you.xyz/api/v2/trans')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setDescription(`Não consegue Ver o(a) Gif/Img? [Clique aqui](${response.body.url})`)
                .setImage(response.body.url)
                .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
                message.channel.send(embed)
               })
             } else {
                 return message.channel.send("Esse canal não é de NSFW +18")
             }
          } 
    }
}