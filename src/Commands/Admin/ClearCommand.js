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
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
  return message.reply("Forneça um número de até **99 mensagens** a serem excluídas");

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel.send(`** Chat limpo por <@${message.author.id}>**`).then(msg => msg.delete({timeout: 20000}))
      .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
    }
}