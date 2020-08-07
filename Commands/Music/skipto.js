const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "<:setav_emoji:730933474911060069> Ir para o número da fila selecionado",
  execute(message, args) {
    if (!args.length)
      return message
        .reply(`Uso: ${message.bot.prefix}${module.exports.name} <Número da fila>`)
        .catch(console.error);

    if (isNaN(args[0]))
      return message
        .reply(`Uso: ${message.bot.prefix}${module.exports.name} <Número da fila>`)
        .catch(console.error);

    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Não há fila.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (args[0] > queue.songs.length)
      return message.reply(`A fila é apenas ${queue.songs.length} músicas longas!`).catch(console.error);

    queue.playing = true;
    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ **pulada ${args[0] - 1} música**`).catch(console.error);
  }
};
