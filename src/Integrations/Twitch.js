const { EventEmitter } = require('events')

module.exports = class Twitch extends EventEmitter {
    constructor(...pedro) {
        this.emit('macaco', ...pedro)
    }
}