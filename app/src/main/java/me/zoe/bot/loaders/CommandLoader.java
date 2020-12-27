package me.zoe.bot.loaders;

import me.zoe.bot.commands.*;

import me.zoe.bot.Zoe;
import me.zoe.bot.commons.utils.CommandUtils;

public class CommandLoader {
    CommandLoader() {
        new CommandUtils()
        .registerCommands(
            new PingCommand()
        );
    }
}