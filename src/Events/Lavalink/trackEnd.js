module.exports = class TrackEndEvent {
    constructor (client) {
      this.client = client
    }

    run(player) {
        player.setTimescale(1, 1, 1)
    }
}