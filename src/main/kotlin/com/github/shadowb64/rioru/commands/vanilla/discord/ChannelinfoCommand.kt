package com.github.shadowb64.rioru.commands.vanilla.discord

import com.github.shadowb64.rioru.commands.*
import net.dv8tion.jda.api.entities.ChannelType.*
import net.dv8tion.jda.api.entities.GuildChannel
import net.dv8tion.jda.api.entities.MessageEmbed
import net.dv8tion.jda.api.entities.StoreChannel
import net.dv8tion.jda.api.entities.TextChannel

class ChannelinfoCommand : AbstractCommand(
    name = "channelinfo",
    aliases = listOf("infochannel"),
    category = CommandCategory.DISCORD
) {
    override fun run(context: CommandContext) =
        context.messageEvent.channel.sendMessage(organize(context)).queue()

    private fun textChannelEmbed(context: CommandContext, embed: RioruEmbedBuilder, infos: TextChannel): MessageEmbed {
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:chName"), infos.name)
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:chID"), infos.id)
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:topic"), infos.topic ?: "Sem tópico definido")
        embed.addField("NSFW", if (infos.isNSFW) "Sim" else "Não")
        embed.addField("News", if (infos.isNews) "Sim" else "Não")
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:createdAt"), context.formatTime(infos.timeCreated))
        return embed.build()
    }

    private fun textChannelEmbed(context: CommandContext, embed: RioruEmbedBuilder, infos: StoreChannel): MessageEmbed {
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:chName"), infos.name)
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:chID"), infos.id)
        embed.addField("Posição", infos.position.toString())
        embed.addField(context.translate("DiscordCommands:channelinfo:embed:createdAt"), context.formatTime(infos.timeCreated))
        return embed.build()
    }

    private fun organize(context: CommandContext): MessageEmbed {
        val channel = getChannel(context)
        val embed = RioruEmbedBuilder(context, RioruColor.SOCIAL)
        lateinit var embedBuilded: MessageEmbed

        @Suppress("NON_EXHAUSTIVE_WHEN")
        when (channel.type) {
            TEXT -> embedBuilded =
                textChannelEmbed(context, embed, if(context.args.isEmpty()) context.messageEvent.textChannel else context.messageEvent.guild.getTextChannelById(context.args[0])!!)
            VOICE -> {
                val infos = context.messageEvent.guild.getVoiceChannelById(context.args[0])!!
                embed.addField(context.translate("DiscordCommands:channelinfo:embed:chName"), infos.name)
                embed.addField(context.translate("DiscordCommands:channelinfo:embed:chID"), infos.id)
                embed.addField("Bit Rate", infos.bitrate.toString())
                embed.addField("Limite de Usuários", if(infos.userLimit == 0) "Indefinido" else infos.userLimit.toString())
                embed.addField(context.translate("DiscordCommands:channelinfo:embed:createdAt"), context.formatTime(infos.timeCreated))
                embed.build().also { embedBuilded = it }
            }
            STORE -> embedBuilded = textChannelEmbed(
                context,
                embed,
                context.messageEvent.guild.getStoreChannelById(context.args[0])!!
            )
        }
        return embedBuilded
    }
}

private fun getChannel(context: CommandContext): GuildChannel {
    val defaultChannel = context.messageEvent.textChannel
    val mentionedChannelsList = context.messageEvent.message.mentionedChannels
    return when {
        mentionedChannelsList.isEmpty() && context.args.isEmpty() -> defaultChannel
        mentionedChannelsList.isNotEmpty() -> {
            if (context.messageEvent.guild.getGuildChannelById(mentionedChannelsList[0].id) === null) defaultChannel
            else mentionedChannelsList[0]
        }
        mentionedChannelsList.isEmpty() && context.args.isNotEmpty() -> context.messageEvent.guild.getGuildChannelById(
            context.args[0]
        ) ?: defaultChannel
        else -> defaultChannel
    }
}