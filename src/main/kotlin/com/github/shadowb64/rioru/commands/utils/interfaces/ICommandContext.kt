package com.github.shadowb64.rioru.commands.utils.interfaces

import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.Guild
import net.dv8tion.jda.api.entities.Member
import net.dv8tion.jda.api.requests.restaction.MessageAction
import net.dv8tion.jda.api.sharding.ShardManager
import java.time.OffsetDateTime

interface ICommandContext {
    val guild: Guild?
    val member: Member?
    val jda: JDA
    val shardManager: ShardManager?

    fun formatTime(time: OffsetDateTime): String =
        "${time.dayOfMonth}/${if (time.monthValue < 10) "0${time.monthValue}" else time.monthValue}/${time.year} ${time.hour}:${time.minute}:${time.second}"

    fun reply(content: String, map: Map<String, Any> = mapOf()): MessageAction

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

    fun translate(translateUri: String, map: Map<String, Any> = mapOf()): String
}