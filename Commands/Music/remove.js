const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  description: "<:setav_emoji:730933474911060069> Remover música da fila",
  execute(message, args) {
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**Não há fila.**").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Uso: ${message.bot.prefix}remove <Número da fila>`);
    if (isNaN(args[0])) return message.reply(`Uso: ${message.bot.prefix}remove <Número da fila>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ **removido **${song[0].title}** da fila.**`);
  }
};
