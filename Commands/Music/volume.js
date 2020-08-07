const { canModifyQueue } = require("../util/EvobotUtil");

module.exports.run = async (bot, message, args) => {
    const queue = message.bot.queue.get(message.guild.id);

    if (!queue) return message.reply("<a:635525264570581045:730934715242119271> **|** Não há nada tocando.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("**Você precisa ingressar em um canal de voz primeiro!**").catch(console.error);

    if (!args[0]) return message.reply(`<a:X_MusicaTKF:737818450956779613> **|** O volume atual é: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("**Por favor, use um número para definir o volume.**").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("**Por favor, use um número entre 0 - 100.**").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`<a:X_MusicaTKF:737818450956779613> **|** Volume alterado para: **${args[0]}%**`).catch(console.error);
};
