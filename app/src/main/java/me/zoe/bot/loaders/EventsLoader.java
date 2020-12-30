package me.zoe.bot.loaders;

import me.zoe.bot.listeners.client.OnReadyListener;
import net.dv8tion.jda.api.events.ReadyEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class EventsLoader extends ListenerAdapter {
    public EventsLoader() {

    }

    @Override
    public void onReady(ReadyEvent event) {
        System.out.println("Deu certo nego");
    }

    @Override
    public void onMessageReceived(MessageReceivedEvent message) {

    }
}