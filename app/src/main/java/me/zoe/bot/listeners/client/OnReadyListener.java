package me.zoe.bot.listeners.client;

import net.dv8tion.jda.api.events.ReadyEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class OnReadyListener extends ListenerAdapter {
    @Override
    public void onReady(ReadyEvent event) {
        System.out.println("Eu estou pronta para trabalhar :D");
    }
}