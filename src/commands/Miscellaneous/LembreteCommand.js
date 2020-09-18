/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class LembreteCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'lembrete',
            aliases: ['remindme'],
            category: 'Miscellaneous'
        })
    }
    // eslint-disable-next-line lines-between-class-members
   async run ({ channel, args, member, author }) {
        var time = args[0]
        var lembrete = args.splice(1).join(' ')

        if (!time) return channel.send('Diga um tempo!')
        if (!lembrete) return channel.send('Diga o que eu devo lhe lembrar!')

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
        channel.send(`<@${author.id}>, Eu irei lhe lembrar sobre ${lembrete}, Daqui ${time}`)

        setTimeout(function () {
            member.send(`${lembrete}`)
        }, parseInt(tempo))
    }
}
