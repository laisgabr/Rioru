const { MessageEmbed } = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.reply("**Não há nada tocando.**").catch(console.error);
    const song = queue.songs[0];

    let nowPlaying = new MessageEmbed()
      .setTitle("Tocando agora")
      .setDescription(`${song.title}\n${song.url}`)
      .setColor("#00faff")
      .setAuthor("Hat Music™️")
      .setTimestamp();

    if (song.duration > 0) nowPlaying.setFooter(new Date(song.duration * 1000).toISOString().substr(11, 8));

    return message.channel.send(nowPlaying);
}
