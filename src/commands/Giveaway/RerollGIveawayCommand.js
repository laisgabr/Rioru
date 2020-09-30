const { Command } = require('../../structure')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'reroll',
      aliases: [],
      category: 'Giveaway'
    })
  }
  run ({ channel, member, args }) {
    if(!member.hasPermission('MANAGE_MESSAGES') && !member.roles.cache.some((r) => r.name === "Giveaways")){
      return channel.send(':x: | Você precisa da Permissão `Gerenciar Mensagens` para continuar!');
    }

    if(!args[0]){
      return channel.send(':x: | Você deve enviar um id de um sorteio!');
    }

    let giveaway =
      this.client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
      this.client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
      return channel.send('Não achei o Sorteio com`'+ args.join(' ') +'`.');
    }

    this.client.giveawaysManager.reroll(giveaway.messageID)
      .then(() => {
        channel.send('Girei os ganhadores para você!');
      })
      .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
          channel.send('Esse sorteio não acabou');
        } else {
          console.error(e);
          channel.send('Aconteceu um erro!');
        }
      });
  }
}
