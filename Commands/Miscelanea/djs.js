module.exports.run = async(bot, message, args) => {
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

const [query, src] = args;
if(!query) return message.channel.send("https://discord.js.org");

const embed = await (await fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src|| "stable"}&q=${query.replace(/#/g, ".")}`)).json();
if (!embed || embed.error) return message.reply("Deu merda :c");

const docEmbed = new MessageEmbed(embed)
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  .setTitle(`Discord.js v12 (${args[1] || "Instável"})`)
  .setTimestamp()
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))

return message.channel.send(docEmbed);
}