const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "<:setav_emoji:730933474911060069> Retomar a música atualmente sendo reproduzida",
  execute(message) {
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.reply("Não há nada tocando.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ **Musica resumida!**`).catch(console.error);
    }

    return message.reply("**A fila não está pausada.**").catch(console.error);
  }
};
