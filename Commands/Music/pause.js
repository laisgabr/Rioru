module.exports.run = async(bot, message, args) => {
const { canModifyQueue } = require("./Util/EvobotUtil");

    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.reply("Não há nada tocando.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ **Música pausada.**`).catch(console.error);
    }
  }