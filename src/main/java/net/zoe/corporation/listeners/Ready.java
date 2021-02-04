package net.zoe.corporation.listeners;

import net.dv8tion.jda.api.events.ReadyEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import net.zoe.corporation.structures.utils.Logging;

public class Ready extends ListenerAdapter {
    @Override
    public void onReady(ReadyEvent event) {
        Logging.sucess("Zoe Online with success");
        Logging.info("Guilds Count:\n " + event.getGuildTotalCount());
        Logging.info("Users Count: " + event.getJDA().getUsers().size());
        
    }
}
