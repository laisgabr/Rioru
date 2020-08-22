module.exports = {
	config: {
		name: 'eval', // nome do comando
		aliases: ['ev'], // se quiser aliases, só colocar:          aliases: ['aliase1', 'aliase2', 'aliase3']  etc.
        description: "",
		category: "Developer" // muita atenção com isso! este campo tem que corresponder a um nome de uma das pastas das categorias, dentro da pasta de comandos!
	},
	run: async (client, message, args) => {
		const { inspect } = require('util')
		if(message.author.id !== '468817505318862882') return message.channel.send("Você não tem permissão para utilizar esse comando!");
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
}
