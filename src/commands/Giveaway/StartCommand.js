const Command = require('../../Util/Command');

module.exports = class StartCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'start',
            aliases: [],
            description: '',
            category: '',
            UserPermission: ['MANAGE_MESSAGES']
        })
    }
    run(message, args, t) {
        const ms = require('ms')
        let giveawayChannel = message.mentions.channels.first();
        
        if(!giveawayChannel){
            return message.channel.send(t('commands:StartGiveaway.notHasChannelMention'));
        }
    
        let giveawayDuration = args[1];
        
        if(!giveawayDuration || isNaN(ms(giveawayDuration))){
            return message.channel.send(':x: You have to specify a valid duration!');
        }
    
        let giveawayNumberWinners = args[2];
        
        if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
            return message.channel.send(':x: You have to specify a valid number of winners!');
        }
    
        let giveawayPrize = args.slice(3).join(' ');
        if(!giveawayPrize){
            return message.channel.send(':x: You have to specify a valid prize!');
        }
    
        client.giveawaysManager.start(giveawayChannel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayNumberWinners,
            hostedBy: message.author,
            messages: {
                giveaway: "🎉🎉 **SORTEIO** 🎉🎉",
                giveawayEnded: "🎉🎉 **SORTEIO ENCERRADO** 🎉🎉",
                timeRemaining: "Tempo Faltante: **{duration}**!",
                inviteToParticipate: "Reaja com 🎉 para participar!",
                winMessage: "Parabéns, {winners}! Você(es) ganhou(ram) **{prize}**!",
                embedFooter: "Zoe | Sorteio",
                noWinner: "Sorteio Cancelado, Não há participantes. Prêmio vai ficar pra mim né?",
                hostedBy: "Criado por: {user}",
                winners: "Ganhador(es)",
                endedAt: "Termina em",
                units: {
                    seconds: "segundos",
                    minutes: "minutos",
                    hours: "horas",
                    days: "dias",
                    pluralS: false
                }
            }
        });   
    }
}