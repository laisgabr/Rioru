const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "nowplaying",
        aliases: ['np'],
        description: '',
        category: "Music"
    },
   run: async(client, message, args) => {
    message.channel.send("Comando em construção")
   }
}