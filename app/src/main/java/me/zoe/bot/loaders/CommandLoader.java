package me.zoe.bot.loaders;

import me.zoe.bot.commands.utils.PingCommand;
import me.zoe.bot.commons.utils.CommandUtils;

public class CommandLoader {
    public CommandLoader() {
        CommandUtils commands = new CommandUtils();
        commands.registerCommands(
            new PingCommand()
        );
    }
}