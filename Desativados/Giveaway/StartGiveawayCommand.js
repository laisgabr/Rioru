/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
/* eslint-disable no-trailing-spaces */
/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')
const ms = require('ms')

module.exports = class StartGiveawayCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'start',
            aliases: ['startGiveaway'],
            usage: '<prefix>start',
            description: 'Inicie um Sorteio',
            category: 'Giveaway'
        })
    } 
   async run ({ channel, member, args, mentions, author }) {
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

        this.client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: author,
            // Messages
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
