const { canModifyQueue } = require("./Util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ['l'],
  description: "<:setav_emoji:730933474911060069> Alternar loop de música",
  execute(message) {
    const queue = message.bot.queue.get(message.guild.id);
    if (!queue) return message.reply("Não há nada tocando.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`**Loop agora está** ${queue.loop ? "**Ligado**" : "**Desligado**"}`)
      .catch(console.error);
  }
};
