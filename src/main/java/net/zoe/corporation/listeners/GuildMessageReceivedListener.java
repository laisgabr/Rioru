package net.zoe.corporation.listeners;

import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;

public class GuildMessageReceivedListener extends ListenerAdapter {
    @Override
    public void onGuildMessageReceived​(GuildMessageReceivedEvent event) {
       event.getMessage().getRawContent();
    }
}