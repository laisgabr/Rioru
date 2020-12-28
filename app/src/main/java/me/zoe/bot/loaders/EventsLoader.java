package me.zoe.bot.loaders;

import me.zoe.bot.Zoe;

import me.zoe.bot.listeners.client.OnReadyListener;
import net.dv8tion.jda.api.events.ReadyEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class EventsLoader extends ListenerAdapter {
    public final Zoe client;

    public EventsLoader(Zoe client) {
        super();
        this.client = client;    
    }

    @Override
    public void onReady(ReadyEvent event) {
        new OnReadyListener(event);
    }

    @Override
    public void onMessageReceived(MessageReceivedEvent message) {

    }
}