module.exports = {
	config: {
		name: 'clear',
		aliases: ['limpar'], 
    description: "",
		category: "Admin"
	},
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Você não tem a Permissão ``Gerenciar Mensagens`` para continuar");
    if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
      return message.reply("Eu não tenho a permissão ``Gerenciar Mensagens`` para continuar")
    }
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 200)
    return message.reply("Forneça um número de até **200 mensagens** a serem excluídas");

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel.send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({timeout: 5000}))
      .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
    }
}