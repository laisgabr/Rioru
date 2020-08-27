module.exports = {
	config: {
		name: 'lyrics',
		aliases: ['letra', 'letras'], 
        description: "",
		category: "Music"
	},
    run: async (client, message, args) => {
    const { MessageEmbed } = require("discord.js");
    const lyricsFinder = require("lyrics-finder");

	let lyrics = null;

    try {
      lyrics = await lyricsFinder(message.content.split(' ').slice(1).join(' '), {limit: 1});
      if (!lyrics) lyrics = `**Nenhuma letra encontrada para ${args.join(" ")}.**`;
    } catch (error) {
      lyrics = `**Nenhuma letra encontrada para ${args.join(" ")}**`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle("Lyrics")
      .setDescription(lyrics)
      .setColor("#00faff")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
    }
}