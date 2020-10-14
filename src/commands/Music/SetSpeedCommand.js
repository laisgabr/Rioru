const { Command } = require('../../structure')
const { ZoePlayer } = require('../../Music')
const customPlayer = new ZoePlayer()

module.exports = class VaporwaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'setspeed',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true, 
            playingOnly: true
        })
    }
    run ({ channel, args }) {
        const off = args[0]
      if(!off) return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")

      if(off === 'on') {} else if(off === 'off') {} else { c }
    }
}
