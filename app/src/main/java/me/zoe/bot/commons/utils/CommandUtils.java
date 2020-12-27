package me.zoe.bot.commons.utils;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class CommandUtils {
    private final LinkedList<Command> commands = new LinkedList();

    public void registerCommands(Command... commands) {
        this.commands.addAll(Arrays.asList(commands));
    }

}
