const { Command } = require('../../structure')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'end',
      aliases: ['endgiveaway'],
      category: 'Giveaway'
    })
  }
  run ({ channel, member, args }) {
    if(!member.hasPermission('MANAGE_MESSAGES') && !member.roles.cache.some((r) => r.name === "Giveaways")){
      return channel.send(':x: | Você precisa da Permissão `Gerenciar Mensagens`.');
    }

    if(!args[0]){
      return channel.send(':x: | Diga o id da Mensagem');
    }

    let giveaway =
      this.client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
      this.client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
      return channel.send('Não consegui achar um sorteio com `'+ args.join(' ') + '`.');
    }

    this.client.giveawaysManager.edit(giveaway.messageID, {
      setEndTimestamp: Date.now()
    })
      .then(() => {
        channel.send('Sorteio vai acabar em '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' segundos...');
      })
      .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
          channel.send('Esse sorteio já acabou!');
        } else {
          console.error(e);
          channel.send('Um erro ocorreu');
        }
      });
  }
}
