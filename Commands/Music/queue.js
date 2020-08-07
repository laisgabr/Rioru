const { MessageEmbed, splitMessage, escapeMarkdown } = require("discord.js");

module.exports = {
  name: "queue",
  aliases: ["q"],
  description: "<:setav_emoji:730933474911060069> Mostra a fila de músicas que irá tocar no momento.",
  execute(message) {
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.reply("**Não há nada tocando.**").catch(console.error);

    const description = queue.songs.map((song, index) => `${index + 1}. ${escapeMarkdown(song.title)}`);

    let queueEmbed = new MessageEmbed()
      .setTitle("Hat bot Music Queue")
      .setDescription(description)
      .setColor("#00faff");

    const splitDescription = splitMessage(description, {
      maxLength: 2048,
      char: "\n",
      prepend: "",
      append: ""
    });

    splitDescription.forEach(async (m) => {
      queueEmbed.setDescription(m);
      message.channel.send(queueEmbed);
    });
  }
};
