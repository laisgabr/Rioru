package com.github.shadowb64.rioru.commands.caramel

import com.github.shadowb64.rioru.utilities.RioruAPIRequester
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.events.interaction.SlashCommandEvent
import net.dv8tion.jda.api.requests.restaction.CommandReplyAction
import java.time.OffsetDateTime

class CommandContext(
    private val messageEvent: SlashCommandEvent,
    private val locale: String,
) {
    val shardManager by lazy { messageEvent.jda.shardManager }
    val guild = messageEvent.guild
    val channel = messageEvent.channel
    val member = messageEvent.member
    val message = messageEvent
    val jda = messageEvent.jda
    val author = messageEvent.user
    val textChannel = messageEvent.textChannel

    fun formatMilliseconds(milliseconds: Long): String {
        val seconds = (milliseconds / 1000).toInt() % 60
        val minutes = (milliseconds / (1000 * 60) % 60)
        val hours = (milliseconds / (1000 * 60 * 60) % 24)

        return if (hours > 0) String.format("%02d:%02d:%02d", hours, minutes, seconds) else String.format(
            "%02d:%02d",
            minutes,
            seconds
        )
    }

    fun sendMessage(content: String, map: Map<String, Any> = mapOf()): CommandReplyAction =
        message.reply(translate(content, map))

    fun translate(translateUri: String, map: Map<String, Any> = mapOf()) =
        RioruAPIRequester.get("/translates", mapOf("locale" to locale, "query" to translateUri)).getString("response")
            .replacePlaceholders(map)

    fun formatTime(time: OffsetDateTime) =
        "${time.dayOfMonth}/${if (time.monthValue < 10) "0${time.monthValue}" else time.monthValue}/${time.year} ${time.hour}:${time.minute}:${time.second}"
}