module.exports.run = async(bot, message, args, queue) => {
    const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) return message.channel.send('Me desculpe, mas você precisa estar em um canal de voz para tocar música!');
		const permissions = voice.channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('Não consigo me conectar ao seu canal de voz, verifique se tenho as permissões adequadas!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('Eu não posso falar neste canal de voz, verifique se eu tenho as permissões adequadas!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`Adc Playlist: **${playlist.title}** foi bem adicionada a lista!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Seleção**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Escolha uma das músicas de 1-10
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 25000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Nenhum valor inserido ou está inválido , cancelando a operação de seleção de vídeo.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 Não consegui obter nenhum resultado de pesquisa.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	}