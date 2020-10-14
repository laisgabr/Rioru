const { Command } = require('../../structure')
const { ZoePlayer } = require('../../Music')
const customPlayer = new ZoePlayer()

module.exports = class VaporwaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            category: 'Music'
        })
    }
    run ({ channel }) {
        
    }
}
