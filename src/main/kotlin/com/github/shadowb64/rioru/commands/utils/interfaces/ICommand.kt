package com.github.shadowb64.rioru.commands.utils.interfaces

import com.github.shadowb64.rioru.commands.marshall.CommandContext
import com.github.shadowb64.rioru.commands.utils.CommandInfo

interface ICommand {
    val config: CommandInfo
    val name: String

    fun run(context: CommandContext) {}
    fun run(context: com.github.shadowb64.rioru.commands.slash.CommandContext) {}
}