package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.RioruColor
import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.TypeGetter
import com.github.shadowb64.rioru.utilities.RioruEmotes

class UserinfoCommand : AbstractCommand(
    name = "userinfo",
    aliases = listOf("ui"),
    category = CommandCategory.DISCORD
) {
    override fun run(context: CommandContext) {
        val user = TypeGetter.getUser(context)

        if (user == null) {
            val arg: String = if (context.args[0].length > 50) context.args[0].substring(0, 50) + "..."
            else context.args[0]
            context.channel.sendMessage(
                context.translate(
                    "ClassicMessages:userNotFound",
                    mapOf("ARG" to arg.replace(Regex("(`)"), ""))
                )
            ).queue()
            return
        }

        var flags = ""
        context.author.flags.forEach { c ->
            run {
                when (c.getName()) {
                    "Early Verified Bot Developer" -> flags += "${RioruEmotes.DEVELOPER.emoteURI} "
                    "Verified Bot" -> flags += "${RioruEmotes.VERIFIED_BOT.emoteURI} "
                    "Bug Hunter Level 1" -> flags += "${RioruEmotes.BUG_HUNTERLV1.emoteURI} "
                    "Bug Hunter Level 2" -> flags += "${RioruEmotes.BUG_HUNTERLV2.emoteURI} "
                    "HypeSquad Events" -> flags += "${RioruEmotes.HYPE_EVENT.emoteURI} "
                    "Early Supporter" -> flags += "${RioruEmotes.EARLY_SUPPORTER.emoteURI} "
                    "Discord Employee" -> flags += "${RioruEmotes.DISCORD_TEAM.emoteURI} "
                    "Partnered Server Owner" -> flags += "${RioruEmotes.PARTNER.emoteURI} "
                    "HypeSquad Balance" -> flags += "${RioruEmotes.BALANCE.emoteURI} "
                    "HypeSquad Brilliance" -> flags += "${RioruEmotes.BRILIANCE.emoteURI} "
                    "HypeSquad Bravery" -> flags += "${RioruEmotes.BRAVERY.emoteURI} "
                }
            }
        }

        val embed = RioruEmbedBuilder(context, RioruColor.DEFAULT)
            .setTitle("$flags  ${user.asTag}")
            .addField(context.translate("DiscordCommands:$name:embed:uName"), "```${user.name}```", true, mapName = mapOf())
            .addField(context.translate("DiscordCommands:$name:embed:uID"), "```${user.id}```", true, mapOf())
            .addField(context.translate("DiscordCommands:$name:embed:createdAt"), context.formatTime(user.timeCreated))
        context.channel.sendMessage(embed.build()).queue()
    }
}