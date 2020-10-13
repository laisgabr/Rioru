const { Player } = require('erela.js')

module.exports = class ZoePlayer extends Player {
    constructor() {
        super()
    }

    setTimescale(speed, pitch, rate) {
        this.node.send({
            op: "filters",
            guildId: this.guild.id,
            timescale: {
                speed,
                pitch,
                rate
            },
        });
    }
}