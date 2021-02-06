package net.zoe.corporation.structures.commands;

import java.util.ArrayList;
import java.util.List;

import net.zoe.corporation.commands.utils.*;

import javax.annotation.Nullable;

public class CommandManager {
    private static final List<Command> commands = new ArrayList<>();

    public CommandManager() {
        addCommand(new PingCommand());
    }

    private void addCommand(Command cmd) {
        commands.add(cmd);
    }

    public static List<Command> getCommands() {
        return commands;
    }

    @Nullable
    public Command getCommand(String query) {
        for (Command cmd: commands) {
            if (cmd.name.equals(query.toLowerCase()) || cmd.aliases.contains(query.toLowerCase())) {
                return cmd;
            }
        }

        return null;
    }
} 