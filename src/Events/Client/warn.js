module.exports = class WarnEvent {
    constructor(client) {
        this.client = client
    }

    run(err) {
        console.warn(err)
    }
}