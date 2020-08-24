module.exports = {
	config: {
		name: 'play',
		aliases: ['p'], 
        description: "",
		category: "Music"
	},
    run: async (client, message, args) => {
        const VoiceCanal = message.member.voice
        console.log(VoiceCanal)
        if(!VoiceCanal) {
            return message.channel.send("Vc n ta em um canal de voz rombado")
        }
        VoiceCanal.join
        const player = client.manager.players.spawn({
            guild: message.guild.id,
            textChannel: message.channel.id
        });
    
        const res = await client.manager.search(args.join(" "), message.author);
        if(!res) return message.channel.send("Não encontrei essa música.")
    
        if(res.loadType === "PLAYLIST_LOADED") {
           const tracks = res.playlist.tracks; 
           
           if(client.manager.players.get(message.guild.id).queue.length !== 0) {
            message.channel.send('Adicionei a playlist em minha queue!');
           }
           for(const track of tracks) player.queue.add(track);
           if(!player.playing) player.play();
        } else {
            player.queue.add(res.tracks[0]);
            if(client.manager.players.get(message.guild.id).queue.length !== 0) {
                message.channel.send('Adicionei a playlist em minha queue!');
            }
        }
    }
}