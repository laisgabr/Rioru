const { Utils } = require("erela.js")
const { MessageEmbed } = require("discord.js")
module.exports.run = async(bot, message, args) => {
        const { voiceChannel } = message.member;
        if (!voiceChannel) return message.channel.send("Voce precisa estar num canal de voz");

        const permissions = voiceChannel.permissionsFor(bot.user);
        if (!permissions.has("CONNECT")) return message.channel.send("Eu não consigo Conectar no canal por falta de permissão");
        if (!permissions.has("SPEAK")) return message.channel.send("Eu não tenho a Permissão Falar");

        if (!args[0]) return message.channel.send("Por favor, Fale o nome da música ou um link");

        const player = bot.music.players.spawn({
            guild: message.guild,
            textChannel: message.channel,
            voiceChannel
        });

        bot.music.search(args.join(" "), message.author).then(async res => {
            switch (res.loadType) {
                case "TRACK_LOADED":
                    player.queue.add(res.tracks[0]);
                    message.channel.send(`Enqueuing \`${res.tracks[0].title}\` \`${Utils.formatTime(res.tracks[0].duration, true)}\``);
                    if (!player.playing) player.play()
                    break;
                
                case "SEARCH_RESULT":
                    let index = 1;
                    const tracks = res.tracks.slice(0, 5);
                    const embed = new RichEmbed()
                        .setColor("RANDOM")
                        .setAuthor("S", message.author.displayAvatarURL)
                        .setDescription(tracks.map(video => `**${index++} -** ${video.title}`))
                        .setFooter("Your response time closes within the next 30 seconds. Type 'cancel' to cancel the selection");

                    await message.channel.send(embed);

                    const collector = message.channel.createMessageCollector(m => {
                        return message.author.id === message.author.id && new RegExp(`^([1-5]|cancel)$`, "i").test(m.content)
                    }, { time: 30000, max: 1});

                    collector.on("collect", m => {
                        if (/cancel/i.test(m.content)) return collector.stop("cancelled")

                        const track = tracks[Number(m.content) - 1];
                        player.queue.add(track)
                        message.channel.send(`Enqueuing \`${track.title}\` \`${Utils.formatTime(track.duration, true)}\``);
                        if(!player.playing) player.play();
                    });

                    collector.on("end", (_, reason) => {
                        if(["time", "cancelled"].includes(reason)) return message.channel.send("Cancelled selection.")
                    });
                    break;

                case "PLAYLIST_LOADED":
                    res.playlist.tracks.forEach(track => player.queue.add(track));
                    const duration = Utils.formatTime(res.playlist.tracks.reduce((acc, cur) => ({duration: acc.duration + cur.duration})).duration, true);
                    message.channel.send(`Enqueuing \`${res.playlist.tracks.length}\` \`${duration}\` tracks in playlist \`${res.playlist.info.name}\``);
                    if(!player.playing) player.play()
                    break;
            }
        }).catch(err => message.channel.send(err.message))
    }