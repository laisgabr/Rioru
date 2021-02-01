package net.zoe.corporation.structures.commands;

import net.dv8tion.jda.api.sharding.ShardManager;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.entities.*;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;

import net.zoe.corporation.utilities.Database;
import net.zoe.corporation.utilities.api.ZoeAPIGetter;

import java.util.List;

public class CommandContext  {
    private final GuildMessageReceivedEvent event;
    private final List<String> args;

    public CommandContext(GuildMessageReceivedEvent event, List<String> args) {
        this.event = event;
        this.args = args;
    }

    public Guild getGuild() {
        return this.getEvent().getGuild();
    }

    public Database getDatabase() {
        return Database;
    }

    public GuildMessageReceivedEvent getEvent() {
        return this.event;
    }

    public List<String> getArgs() {
        return this.args;
    }

    public Guild getGuild() {
        return this.getEvent().getGuild();
    }

    public TextChannel getChannel() {
        return this.getEvent().getChannel();
    }

    public Message getMessage() {
        return this.getEvent().getMessage();
    }

    public User getAuthor() {
        return this.getEvent().getAuthor();
    }
    
    public Member getMember() {
        return this.getEvent().getMember();
    }

    public JDA getJDA() {
        return this.getEvent().getJDA();
    }

    public ShardManager getShardManager() {
        return this.getJDA().getShardManager();
    }

    public User getSelfUser() {
        return this.getJDA().getSelfUser();
    }

    public Member getSelfMember() {
        return this.getGuild().getSelfMember();
    }
}