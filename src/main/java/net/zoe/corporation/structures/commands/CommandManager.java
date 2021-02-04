package net.zoe.corporation.structures.commands;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Nullable;

public class CommandManager {
    private static final List<Command> commands = new ArrayList<>();

    public static void addCommands(Command... CommandsClass) {

    }

    public static void addCommand(Command cmd) {

    }

    public static List<Command> getCommands() {
        return commands;
    }

    @Nullable
    public static Command getCommand(String query) {
        return null;
    }
} 