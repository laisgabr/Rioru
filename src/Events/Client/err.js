module.exports = class ErrEvent {
    constructor(client) {
        this.client = client
    }

    run(err) {
        console.warn(err)
    }
}