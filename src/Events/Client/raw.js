module.exports = class RawEvent {
    constructor (client) {
        this.client = client
    }

    run(d) {
        this.client.music.updateVoiceState(d)
    }
}