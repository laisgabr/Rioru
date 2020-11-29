module.exports = class CommandOptions {
    constructor(client, cmd, msg, t) {
        this.client = client;
        this.cmd = cmd;
        this.msg = msg;
        this.t = t;
    }

    contextLoad() {
        if(this.cmd.onlyDevs && !this.client.settings.owners.includes(this.msg.author.id)) {
            return this.msg.channel.createMessage(t())
        }

    }
}