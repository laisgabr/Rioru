const Command = require('../../Util/Command');

module.exports = class UptimeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'uptime',
            aliases: ['timeon'],
            description: 'Mostra meu tempo de atividade',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
    const { ZoeEmbed } = require('../../Util')

    let totalSeconds = this.client.uptime / 1000
    let dias = Math.floor(totalSeconds / 86400)
    let horas = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minuto = Math.floor(totalSeconds / 60)
    let segundo = totalSeconds % 60

    let uptime = `🗓️ ${dias.toFixed()}D |\n ${horas.toFixed()}H |\n ${minuto.toFixed()}M |\n ${segundo.toFixed()}S`

    const embed = new ZoeEmbed()
    .setDescription(`${uptime}`)
    message.channel.send(embed)
    }
}