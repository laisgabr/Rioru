package net.zoe.corporation.structures.commands;

public @interface Command {
    String name();

    default String[] aliases() {
        return {};
    };

    default String description() {
        return "Not have a description provied";
    };

    default String usage() {
        return "Not have a usage provied";
    };

    default String category() {
        return "Miscellaneous";
    };

    default boolean developersOnly() {
        return false;
    };

    default boolean enabled() {
        return true;
    };

    default boolean canDisable() {
        return true;
    };

    default boolean hidden() {
        return false;
    };
}
