const Command = require('../../Util/Command');

module.exports = class LoopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'loop',
            aliases: ['lp'],
            description: 'Loopa a Lista de Reprodução/Música',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            queueOnly: true
        })
    }
    run(message, args, t) {
        const player = this.client.music.players.get(message.guild.id)

        const loopType = args[0].toLowerCase()

        if(!['queue', 'track'].includes(loopType)) return message.channel.send(this.client.emojis.error + ' Diga [queue/track] para continuar')

        switch(loopType) {
            case 'queue':
                player.setQueueRepeat(!player.queueRepeat)
                
                const msg = player.queueRepeat ? 'Ativando Loop na Lista de Reprodução' : 'Desativando Loop da Lista de Reprodução'
                message.channel.send(msg)
                break;
            
            case 'track':
                player.setTrackRepeat(!player.trackRepeat)

                const { title } = player.queue[0]
                const trackMsg = player.trackRepeat ? 'Ativando Loop em ' + title : 'Desativando loop em ' + title
                
                message.channel.send(msg)
                break;
        }
    }
}