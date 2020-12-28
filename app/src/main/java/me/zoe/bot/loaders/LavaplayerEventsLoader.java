package me.zoe.bot.loaders;

import com.sedmelluq.discord.lavaplayer.player.AudioPlayer;
import com.sedmelluq.discord.lavaplayer.player.event.AudioEvent;
import com.sedmelluq.discord.lavaplayer.player.event.AudioEventAdapter;
import com.sedmelluq.discord.lavaplayer.tools.FriendlyException;
import com.sedmelluq.discord.lavaplayer.track.AudioTrack;
import com.sedmelluq.discord.lavaplayer.track.AudioTrackEndReason;

public class LavaplayerEventsLoader extends AudioEventAdapter {
    LavaplayerEventsLoader() {
        super();
    }

    @Override
    public void onPlayerPause(AudioPlayer player) {

    }

    @Override
    public void onPlayerResume(AudioPlayer player) {

    }

    @Override
    public void onEvent(AudioEvent event) {

    }

    @Override
    public void onTrackStuck(AudioPlayer player, AudioTrack track, long thresholdMs) {

    }

    @Override
    public void onTrackEnd(AudioPlayer player, AudioTrack track, AudioTrackEndReason endReason) {

    }

    @Override
    public void onTrackException(AudioPlayer player, AudioTrack track, FriendlyException exception) {

    }

    @Override
    public void onTrackStart(AudioPlayer player, AudioTrack track) {

    }
}
