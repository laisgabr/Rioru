const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "<:setav_emoji:730933474911060069> Ignora a música atualmente sendo reproduzida",
  execute(message) {
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue)
      return message.reply("<a:635525264570581045:730934715242119271> **|** **Não há nada que eu possa pular para você.**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ **Música pulada**`).catch(console.error);
  }
};
