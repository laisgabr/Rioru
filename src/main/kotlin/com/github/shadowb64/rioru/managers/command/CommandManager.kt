package com.github.shadowb64.rioru.managers.command

import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.vanilla.developer.EvalCommand
import com.github.shadowb64.rioru.commands.vanilla.developer.ShellCommand
import com.github.shadowb64.rioru.commands.vanilla.discord.AvatarCommand
import com.github.shadowb64.rioru.commands.vanilla.discord.ChannelinfoCommand
import com.github.shadowb64.rioru.commands.vanilla.discord.ServerinfoCommand
import com.github.shadowb64.rioru.commands.vanilla.discord.UserinfoCommand
import com.github.shadowb64.rioru.commands.vanilla.music.PlayCommand
import com.github.shadowb64.rioru.commands.vanilla.music.QueueCommand
import com.github.shadowb64.rioru.commands.vanilla.music.SkipCommand
import com.github.shadowb64.rioru.commands.vanilla.utils.HelpCommand
import com.github.shadowb64.rioru.commands.vanilla.utils.PingCommand
import com.github.shadowb64.rioru.utilities.Logger

class CommandManager {
    init {
        registerCommands(
            EvalCommand(),
            ShellCommand(),
            // ///////////////Utils///////////////
            PingCommand(),
            HelpCommand(),
            // ///////////////Music///////////////
            PlayCommand(),
            QueueCommand(),
            SkipCommand(),
            // ///////////////Discord///////////////
            ChannelinfoCommand(),
            AvatarCommand(),
            UserinfoCommand(),
            ServerinfoCommand()
        )
    }

    companion object {
        var commands = ArrayList<AbstractCommand>()

        fun getCommand(query: String): AbstractCommand? =
            commands.find { c -> c.name == query.toLowerCase() || c.aliases.contains(query.toLowerCase()) }

        fun registerCommands(vararg cmds: AbstractCommand) {
            Logger.info { "Loading commands" }
            for (cmd in cmds) commands.add(cmd)

            Logger.info { "All commands have been loaded" }
        }
    }
}