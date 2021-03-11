package com.github.mrdrooxbr.rioru.utils.database.models

import com.github.mrdrooxbr.rioru.utils.database.models.utils.Blacklist
import com.github.mrdrooxbr.rioru.utils.database.models.utils.Defenses

data class GuildModel(
    val id: String,
    var commandsChannel: List<String> = listOf("none"),
    var blacklist: Blacklist = Blacklist(
        false,
        null,
        null,
        null
    ),
    var defenses: Defenses = Defenses(
        antiAltAccountsEnabled = false,
        antiBotsEnabled = false,
        antiCapsLockExcessiveEnabled = false,
        antiCapsLockExcessiveIgnoredChannels = null,
        antiFloodEnabled = false,
        antiFloodIgnoredChannels = null,
        antiInvitesEnabled = false,
        antiInvitesIgnoredChannels = null,
        antiLinksEnabled = false,
        antiLinksIgnoredChannels = null,
        antiSpamEnabled = false,
        antiSpamIgnoredChannels = null
    )
    )