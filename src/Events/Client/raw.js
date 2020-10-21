module.exports = class RawEvent {
    constructor (client) {
        this.client = client
    }

    async run(d) {
        this.client.music.updateVoiceState(d)
    }
}