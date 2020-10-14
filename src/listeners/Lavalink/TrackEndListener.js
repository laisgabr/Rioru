const { Listener } = require('../../structure')
const { ZoePlayer } = require('../../Music')

const customPlayer = new ZoePlayer()

module.exports = class TrackEndListener extends Listener {
    constructor() {
        super({
            name: 'trackEnd'
        })
    }
    run() {
        customPlayer.clearEffects()
    }
}
