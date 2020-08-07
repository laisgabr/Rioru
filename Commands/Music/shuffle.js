const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "shuffle",
  description: "<:setav_emoji:730933474911060069> Aleatório na fila",
  execute(message) {
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**Não há fila.**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    let songs = queue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * i);
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    queue.songs = songs;
    message.bot.queue.set(message.guild.id, queue);
    queue.textChannel.send(`${message.author} 🔀 **embaralhou a fila**`).catch(console.error);
  }
};
