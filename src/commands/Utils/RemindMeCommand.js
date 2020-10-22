const Command = require('../../Util/Command')

module.exports = class RemindMeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'remindme',
            aliases: ['lembrete', 'lembrar'],
            description: 'Cheio de coisa pra fazer ? Faça um lembrete',
            category: 'Utils'
        })
    }
    run(message, args, t) {
        var time = args[0]
        var lembrete = args.slice(1).join(' ')

        if (!time) return message.channel.send(t('errors:RemindCommand.ErrorTimeNotDefined'))
        if (!lembrete) return message.channel.send(t('errors:RemindCommand.ErrorRememberNotDefined'))

        time = await time.toString()

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
        message.channel.send(t('commands:RemindCommand.ResponseMessage', { lembrete: lembrete, time: time }))

        setTimeout(function () {
            message.channel.send(`${lembrete}`)
        }, parseInt(tempo))
    }
}