package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.RioruEmbedBuilder
import com.github.shadowb64.rioru.commands.caramel.AbstractCommand
import com.github.shadowb64.rioru.commands.caramel.CommandCategory
import com.github.shadowb64.rioru.commands.caramel.CommandContext
import com.github.shadowb64.rioru.commands.caramel.SlashCommandInfo
import net.dv8tion.jda.api.entities.ChannelType.*
import net.dv8tion.jda.api.entities.GuildChannel
import net.dv8tion.jda.api.entities.MessageEmbed
import net.dv8tion.jda.api.entities.TextChannel
import net.dv8tion.jda.api.entities.VoiceChannel

@SlashCommandInfo(
    name = "channelinfo",
    category = CommandCategory.DISCORD
)
class ChannelinfoCommand : AbstractCommand() {
    override fun run(context: CommandContext) =
        context.channel.sendMessage(organize(context)).queue()

    private fun embed(context: CommandContext, embed: RioruEmbedBuilder, infos: GuildChannel): MessageEmbed {
        var channel = infos
        embed.addField(context.translate("DiscordCommands:$name:embed:chName"), infos.name)
        embed.addField(context.translate("DiscordCommands:$name:embed:chID"), infos.id)
        embed.addField(
            context.translate("DiscordCommands:$name:embed:createdAt"),
            context.formatTime(infos.timeCreated)
        )
        when (channel.type) {
            TEXT -> {
                channel = infos as TextChannel
                embed.addField(
                    context.translate("DiscordCommands:$name:embed:topic"),
                    channel.topic ?: "Sem tópico definido"
                )
                embed.addField(
                    "NSFW",
                    if (channel.isNSFW) context.translate("ClassicMessages:yes") else context.translate("ClassicMessages:no")
                )
                embed.addField(
                    "News",
                    if (channel.isNews) context.translate("ClassicMessages:yes") else context.translate("ClassicMessages:no")
                )
                embed.addField(context.translate("DiscordCommands:$name:embed:position"), channel.position)
            }

            VOICE -> {
                channel = infos as VoiceChannel
                embed.addField(context.translate("DiscordCommands:$name:embed:bitrate"), channel.bitrate)
                embed.addField(
                    context.translate("DiscordCommands:$name:embed:userLimit"),
                    if (channel.userLimit == 0) context.translate("ClassicMessages:null") else channel.userLimit
                )
            }
            else -> {
            }
        }

        return embed.build()
    }
}