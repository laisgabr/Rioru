const { GorilinkManager } = require('gorilink')
const { ZoePlayer } = require('../')

/*
   Thanks for Gorillas Team for the creation the Gorilink :D
*/

module.exports = class ZoeManager extends GorilinkManager {
    constructor(client, nodes, options = {}) {
        this.Player = ZoePlayer;
        super(client, nodes, options)
    }
}