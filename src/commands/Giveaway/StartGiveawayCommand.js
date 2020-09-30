const { Command } = require('../../structure')

module.exports = class extends Command {
  constructor(client) {
    super(client, {
      name: 'start',
      aliases: ['startgiveaway'],
      category: 'Giveaway'
    })
  }
  run ({ channel, mentions, member, args, author }) {
    if (!member.hasPermission('ADMINISTRATOR') && !member.roles.cache.some((r) => r.name === "Giveaways")) {
      return channel.send(':x: Você não tem permissão de \`Administrador\` para continuar')
    }
    let giveawayChannel = mentions.channels.first()
    channel.send('Qual canal ?')



    const collector = channel.createMessageCollector(m => {
      return m.author.id === author.id

    }, { time: 60000, max: 1 });

    collector.on("collect", m => {
      if(m.content === giveawayChannel) {
        return channel.send('Ok, Q')
      } else {
        channel.send('Mencione um Canal!')
      }

      let msg = m.content;
      if (msg.toLowerCase() === 'cancel' || msg.toLowerCase() === 'cancelar') return collector.stop('Cancelado');


    })

    let giveawayNumberWinners = args[2]

    if (isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) {
      return channel.send(':x: Você precisa dizer um Numero Válido de Ganhadores')
    }
    let giveawayPrize = args.slice(1).join(' ')

    if (!giveawayPrize) {
      return channel.send(':x: Você tem que dizer um Prêmio!')
    }

    let time = args[3]
    time = await time.toString()
    if(!time) return channel.send('Diga um tempo')


    if (time.indexOf('s') !== -1) {
      var tempoS = await time.replace(/s.*/, '')
      var tempo = await tempoS * 1000
    } else if (time.indexOf('m') !== 1) {
      var tempoM = await time.replace(/m.*/, '')
      tempo = await tempoM * 60 * 1000
    } else if (time.indexOf('h') !== -1) {
      var tempoH = await time.replace(/h.*/, '')
      tempo = await tempoH * 1000
    } else if (time.indexOf('d') !== 1) {
      var tempoD = await time.replace(/d.*/, '')
      tempo = await tempoD * 60 * 1000
    }

    this.client.giveawaysManager.start(giveawayChannel, {
      time: parseInt(tempo),
      prize: giveawayPrize,
      winnerCount: giveawayNumberWinners,
      hostedBy: author,
      messages: {
        giveaway: "🎉🎉 **SORTEIO** 🎉🎉",
        giveawayEnded: "🎉🎉 **SORTEIO ACABOU** 🎉🎉",
        timeRemaining: "Tempo Faltando: **{duration}**!",
        inviteToParticipate: "Reaja com 🎉 para participar",
        winMessage: "Parabéns, {winners}! Você ganhou **{prize}**!",
        embedFooter: "Sorteios",
        noWinner: "Sorteio Cancelado, Não tem participantes validos",
        hostedBy: "Criado por: {user}",
        winners: "Ganhador(es)",
        endedAt: "Terminou(a) em",
        units: {
          seconds: "Segundos",
          minutes: "Minutos",
          hours: "Horas",
          days: "Dias",
          pluralS: false
        }
      }
    })
  }
}
