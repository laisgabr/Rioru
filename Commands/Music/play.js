const { Discord } = require("discord.js");

try {
const { play } = require("./Common/play");
const { YOUTUBE_API_KEY, SOUNDCLOUD_CLIENT_ID } = require("../../config.json");
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
const scdl = require("soundcloud-downloader");

module.exports.run = async (bot, message, args, queue) => {

     const { channel } = message.member.voice
     console.log(channel)
  
      const serverQueue = bot.queue.get(message.guild.id);
      if (!channel) return message.reply("**Você precisa ingressar em um canal de voz primeiro!**").catch(console.error);
      if (serverQueue && channel !== message.guild.me.voice.channel)
        return message.reply(`**Você deve estar no mesmo canal que eu**`).catch(console.error);
  
      if (!args.length)
        return message
          .reply(`Uso: ${message.bot.prefix}play <YouTube URL> ou Nome do video | Soundcloud URL>`)
          .catch(console.error);
  

      const search = args.join(" ");
      const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
      const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
      const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
      const url = args[0];
      const urlValid = videoPattern.test(args[0]);
  
      // Start the playlist if playlist url was provided
      if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
        return message.bot.commands.get("playlist").execute(message, args);
      }
  
      const queueConstruct = {
        textChannel: message.channel,
        channel,
        connection: null,
        songs: [],
        loop: false,
        volume: 100,
        playing: true
      };
  
      let songInfo = null;
      let song = null;
  
      if (urlValid) {
        try {
          songInfo = await ytdl.getInfo(url);
          song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds
          };
        } catch (error) {
          console.error(error);
          return message.reply(error.message).catch(console.error);
        }
      } else if (scRegex.test(url)) {
        // It is a valid Soundcloud URL
        try {
          const results = await youtube.searchVideos(search, 1);
          songInfo = await ytdl.getInfo(results[0].url);
          song = {
            title: songInfo.videoDetails.Title,
            url: songInfo.videoDetails.video_url,
            duration: songInfo.videoDetails.lengthSeconds
          };
        } catch (error) {
          console.error(error);
          return message.reply("**Nenhum vídeo foi encontrado com um título correspondente**").catch(console.error);
        }
      }
  
      if (serverQueue) {
        serverQueue.songs.push(song);
        return serverQueue.textChannel
          .send(`✅ **${song.title}** **foi adicionado à fila por** ${message.author}`)
          .catch(console.error);
      }
  
      queueConstruct.songs.push(song);
      bot.queue.set(message.guild.id, queueConstruct);
  
      try {
        queueConstruct.connection = await channel.join();
        await queueConstruct.connection.voice.setSelfDeaf(true);
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(error);
        bot.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`**Não foi possível entrar no canal:** ${error}`).catch(console.error);
      }
    }
  } catch (err) {
    console.error(`Erro: ` + err)
    return message.channel.send("Erro: " + err)
  }  

