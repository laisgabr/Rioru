module.exports.run = async(bot, message, args) => {
   const { inspect } = require('util')

    const ownerid = require('../../config.json') 
    if(message.author.id !== process.env.OWNERS) return message.reply("Apenas Pessoas Especiais podem usar esse Comando")

    const input = args.join(" ");
        try {
            let output = eval(input);

            if(typeof output !== "string") output = inspect(output);

            if(output.size > 1950) output = output.substr(0, 1950);

            message.channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
        } catch (error) {
            message.channel.send(`**Error:**\n\`${error}\``);
        }
}