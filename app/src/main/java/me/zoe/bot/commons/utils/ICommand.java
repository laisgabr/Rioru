package me.zoe.bot.commons.utils;

import java.util.List;

public interface ICommand {
    void handle(CommandContext ctx);

    String getName();

    default List<String> getAliases() {
        return List.of();
    }

    default String getDescription() {
        return "Nenhuma descrição foi provida"
    };

    default String getUsage() {
        return "Nenhuma forma de usar foi provida"
    };

    default String getCategory() {
        return "General"
    }

    default int getCooldown() {
        return 3;
    }

    default boolean getEnabled() {
        return true;
    }

    default boolean getOnlyDevs() {
        return false;
    };
}