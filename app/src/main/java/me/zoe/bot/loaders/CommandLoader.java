package me.zoe.bot.loaders;

import com.jagrosh.jdautilities.command.CommandClientBuilder;

public class CommandLoader {
    public CommandLoader() {
        CommandClientBuilder builder = new CommandClientBuilder();
        var CommandBuilded = builder.setOwnerId("468817505318862882")
                .setCoOwnerIds("219469905358094336").addCommands()
                .setPrefix("z!!").build();
    }
}