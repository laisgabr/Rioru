module.exports = class CommandOptions {
    constructor(zoe, cmd, msg, guild) {
        this.zoe = zoe;
        this.cmd = cmd;
        this.msg = msg;
    }

    contextOptionsLoad() {
        if(this.cmd.onlyDevs && !this.zoe.settings.owners.includes(this.msg.author.id)) {

        }
    }
}