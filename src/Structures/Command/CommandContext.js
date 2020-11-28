module.exports = class CommandContext {
    constructor(client, msg) {
        this.client = client;
        this.msg = msg;
    }
}