/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: '',
            aliases: [],
            usage: '',
            description: '',
            category: ''
        })
    }
    run ({ channel }) {
        
    }
}
