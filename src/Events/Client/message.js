const { prefix } = require("../../../config.json");

module.exports = async (client, message) => {

    if (message.author.bot || message.channel.type == 'dm') return; 

    const args = message.content.slice(prefix.length).trim().split(/ +/g),
          command = args.shift().toLowerCase()

    if (!message.content.startsWith(prefix)) return;
    let commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command)); 
    if (commandFile) commandFile.run(client, message, args);
}