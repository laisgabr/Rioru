const Command = require('../../Util/Command');

module.exports = class NightcoreCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        const player = this.client.music.players.get(message.guild.id)
        let msg = ''

        if(player.setNightcore() === true) { 
            player.setNightcore(false)
            msg = 'Desativando o Filtro Nightcore'
        } else {
            player.setNightcore(true)
            msg = 'Ativando o Filtro Nightcore'
        }

        message.channel.send(msg)
    }
}