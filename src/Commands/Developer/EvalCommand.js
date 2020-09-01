module.exports = {
	config: {
		name: 'eval', 
		aliases: ['ev'], 
        description: "",
		category: "Developer"
	},
	run: async (client, message, args) => {
		const { inspect } = require('util') /* const a = return*/
        if (!['468817505318862882', '738509296131637378', '330879828683390976', '336946966929866752'].includes(message.author.id)) {
            return message.channel.send('Some daq');
    }

        const input = args.join(" ");
        try {
            if(message.content === 'ya!eval client.token') return message.reply(":thumbsup:")
            if(message.content === 'ya!eval config.token') return message.reply(":thumbsup:")
            let output = eval(input);

            if(typeof output !== "string") output = inspect(output);

            if(output.size > 1950) output = output.substr(0, 1950);

            message.channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
        } catch (error) {
            message.channel.send(`**Error:**\n\`${error}\``);
        }
       
	}
}
