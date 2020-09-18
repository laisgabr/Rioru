const { Command } = require('../../structure')

module.exports = class JoinCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'join',
            aliases: [],
            category: 'Music'
        })
    }
  async run ({ channel, lavalink, guild, member }) {
    const voiceChannel = member.voice.channel;
    if (!voiceChannel) return channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')

    if (!guild.me.permissions.has("CONNECT")) return channel.send("Eu não tenho a Permissão `Conectar` para fazer isso");
   
    const player = await lavalink.players.spawn({
        guild: guild,
        textChannel: channel,
        voiceChannel
    });
    }
}
