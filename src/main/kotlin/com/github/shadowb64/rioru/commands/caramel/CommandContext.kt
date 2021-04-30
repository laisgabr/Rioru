package com.github.shadowb64.rioru.commands.caramel

import com.github.shadowb64.rioru.Rioru
import com.github.shadowb64.rioru.utilities.replacePlaceholders
import net.dv8tion.jda.api.events.message.MessageReceivedEvent
import java.time.OffsetDateTime

class CommandContext(
    private val messageEvent: MessageReceivedEvent,
    val args: List<String>,
    private val locale: String,
) {
    val shardManager by lazy { messageEvent.jda.shardManager }
    val guild = messageEvent.message.guild
    val channel = messageEvent.message.channel
    val member = messageEvent.message.member
    val message = messageEvent.message
    val jda = messageEvent.jda
    val author = messageEvent.author
    val textChannel = messageEvent.textChannel

    override fun toString() = "CommandContext($messageEvent, $args, $locale)"

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

    fun translate(translateUri: String, map: Map<String, String?> = mapOf()): String {
        val port = Rioru.getServicesConf().getJSONObject("dashboard").getJSONObject("apiNodeJS").getInt("port")
        return khttp.get("localhost:$port/locales/$locale?q=$translateUri").text.replacePlaceholders(map)
    }

    fun formatTime(time: OffsetDateTime): String =
        "${time.dayOfMonth}/${if (time.monthValue < 10) "0${time.monthValue}" else time.monthValue}/${time.year} ${time.hour}:${time.minute}:${time.second}"
}