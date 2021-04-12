package com.github.shadowb64.rioru.commands.vanilla.utils

import com.github.shadowb64.rioru.commands.framework.*

class PingCommand: AbstractCommand(
    name = "ping",
    aliases = listOf("latency", "latencia"),
    category = CommandCategory.UTILS
) {
    override fun run(context: CommandContext) {
        if(context.args.isEmpty()) {
            context.messageEvent.channel.sendMessage("Ping message").queue { res ->
                kotlin.run {
                    res.editMessage("Pong message").queue()
                }
            }
            return
        }
    }
}