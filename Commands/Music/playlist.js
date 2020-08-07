const { MessageEmbed } = require("discord.js");
const { play } = require("./Common/play");
const { YOUTUBE_API_KEY, MAX_PLAYLIST_SIZE } = require("../../config.json");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);

module.exports = {
  name: "playlist",
  cooldown: 3,
  aliases: ["pl"],
  description: "<:setav_emoji:730933474911060069> Reproduzir uma lista de reprodução do youtube",
  async execute(message, args) {
    const { PRUNING } = require("../../config.json");
    const { channel } = message.member.voice;

    const serverQueue = message.bot.queue.get(message.guild.id);
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(`Você deve estar no mesmo canal que ${message.bot.user}`).catch(console.error);

    if (!args.length)
      return message
        .reply(`Uso: ${message.bot.prefix}playlist <YouTube Playlist URL | Nome da playlist>`)
        .catch(console.error);
    if (!channel) return message.reply("Você precisa ingressar em um canal de voz primeiro!").catch(console.error);

    const permissions = channel.permissionsFor(message.bot.user);
    if (!permissions.has("CONNECT"))
      return message.reply("Não é possível conectar ao canal de voz, faltando permissões");
    if (!permissions.has("SPEAK"))
      return message.reply("Não consigo falar neste canal de voz, verifique se tenho as permissões adequadas!");

    const search = args.join(" ");
    const pattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const url = args[0];
    const urlValid = pattern.test(args[0]);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let song = null;
    let playlist = null;
    let videos = [];

    if (urlValid) {
      try {
        playlist = await youtube.getPlaylist(url, { part: "snippet" });
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply("Lista de reprodução não encontrada :(").catch(console.error);
      }
    } else {
      try {
        const results = await youtube.searchPlaylists(search, 1, { part: "snippet" });
        playlist = results[0];
        videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
      } catch (error) {
        console.error(error);
        return message.reply("Lista de reprodução não encontrada :(").catch(console.error);
      }
    }

    videos.forEach((video) => {
      song = {
        title: video.title,
        url: video.url,
        duration: video.durationSeconds
      };

      if (serverQueue) {
        serverQueue.songs.push(song);
        if (!PRUNING)
          message.channel
            .send(`✅ **${song.title}** foi adicionado à fila por ${message.author}`)
            .catch(console.error);
      } else {
        queueConstruct.songs.push(song);
      }
    });

    let playlistEmbed = new MessageEmbed()
      .setTitle(`${playlist.title}`)
      .setURL(playlist.url)
      .setColor("#00faff")
      .setTimestamp();

    if (!PRUNING) {
      playlistEmbed.setDescription(queueConstruct.songs.map((song, index) => `${index + 1}. ${song.title}`));
      if (playlistEmbed.description.length >= 2048)
        playlistEmbed.description =
          playlistEmbed.description.substr(0, 2007) + "\nLista de reprodução maior que o limite de caracteres ...";
    }

    message.channel.send(`${message.author} Playlist iniciada`, playlistEmbed);

    if (!serverQueue) message.bot.queue.set(message.guild.id, queueConstruct);

    if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(error);
        message.bot.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`**Não foi possível ingressar no canal:** ${error}`).catch(console.error);
      }
    }
  }
};
