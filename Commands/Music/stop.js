const { canModifyQueue } = require("../util/EvobotUtil");


module.exports = {
  name: "stop",
  description: "<:setav_emoji:730933474911060069> Pára a música",
  execute(message) {
    const queue = message.bot.queue.get(message.guild.id);
    
    if (!queue) return message.reply("<:693233190457835571:730932984869552210> **|** Não há nada tocando.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ **Música parada**`).catch(console.error);
  }
};
