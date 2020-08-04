const ms = require('ms');

exports.run = async (bot, message, args) => {
    
    
    const config = require(`./Common/bot`)

    const lang = require(`./Common/sorteio`)

    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
        return message.channel.send("Você não tem a Permissão `Gerenciar Mensagens` para continuar");
    }

    let giveawayChannel = message.mentions.channels.first();
 
    if(!giveawayChannel){
        return message.channel.send(lang.start.channel);
    }

    let giveawayDuration = args[1];
   
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(lang.start.duration);
    }

    let giveawayNumberWinners = args[2];
    
    if(isNaN(giveawayNumberWinners)){
        return message.channel.send(lang.start.argswinners);
    }

   
    let giveawayPrize = args.slice(3).join(' ');
    
    if(!giveawayPrize){
        return message.channel.send(lang.start.prize);
    }

    bot.giveawaysManager.start(giveawayChannel, {
        
        
        time: ms(giveawayDuration),
        
        prize: giveawayPrize,
        
        winnerCount: giveawayNumberWinners,
        
        hostedBy: message.author,
        
        messages: {
            giveaway: text1,
            giveawayEnded: text2,
            timeRemaining: lang.start.timeRemaining,
            inviteToParticipate: lang.start.inviteToParticipate(message),
            winMessage: lang.start.winMessage(message),
            embedFooter: lang.start.embedFooter,
            noWinner: lang.start.noWinner,
            hostedBy: lang.start.hostedBy,
            winners: lang.start.winners,
            endedAt: lang.start.endedAt,
            units: {
                seconds: lang.units.seconds,
                minutes: lang.units.minutes,
                hours: lang.units.hours,
                days: lang.units.days,
                pluralS: false 
            }
        }
    });

    message.channel.send(`${lang.start.good} ${giveawayChannel} !`);

};