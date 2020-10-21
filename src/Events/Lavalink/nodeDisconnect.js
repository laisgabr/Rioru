module.exports = class NodeDisconnectEvent {
    constructor (client) {
        this.client = client
    }

    run(node, reason) {
        console.log(node.options.tag + " disconnected with reason: " + reason)
    }
}