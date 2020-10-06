const { Command } = require('../../structure')

module.exports = class JoinCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'join',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true
        })
    }
  async run ({ channel, lavalink, guild, member }) {
    const voiceChannel = member.voice.channel;

    if (!guild.me.permissions.has("CONNECT")) return channel.send("<:xSweet:756989900661850182> | Eu não tenho a Permissão `Conectar` para fazer isso");

    const player = await lavalink.players.spawn({
        guild: guild,
        textChannel: channel,
        voiceChannel
    });
    }
}
