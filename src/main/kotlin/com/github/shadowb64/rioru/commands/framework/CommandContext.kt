package com.github.shadowb64.rioru.commands.framework

import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class CommandContext(val messageEvent: GuildMessageReceivedEvent, val args: List<String>, private val locale: String)