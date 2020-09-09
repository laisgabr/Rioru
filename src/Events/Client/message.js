const { prefix } = require("../../../config.json");
const fs = require("fs")

module.exports = async (client, message, guild) => {

    let bl = require('../../Database/Blacklist.json')

    if (bl[message.author.id] === true) return;
    if (message.author.bot) return; 
    if(message.content === '<@711341613930250330>' || message.content === '<@!711341613930250330>' || message.content === '<!@711341613930250330>') return message.channel.send(`Olá <@${message.author.id}>, Meu prefixo é \`ya!\`. Use \`ya!ajuda\` ou \`ya!info\` para mais Informações.`)

   const DJRole = guild.roles.cache.find(role => role.name === "DJ da Yuuki")

    if(message.channel.type == 'dm') {
    message.reply("Não respondo via dm ok ?")
    return message.delete({ timeout: 5000 })
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/g),
          command = args.shift().toLowerCase()

    if (!message.content.startsWith(prefix)) return;
    let commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command)); 
    if (commandFile) commandFile.run(client, message, args);
}