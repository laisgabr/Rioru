package com.github.mrdrooxbr.rioru.utils.database.models

import com.github.mrdrooxbr.rioru.utils.database.models.utils.Blacklist
import com.github.mrdrooxbr.rioru.utils.database.models.utils.Defenses

data class GuildModel(
    val id: String,
    var commandsChannel: List<String> = listOf("none"),
    var blacklist: Blacklist,
    var defenses: Defenses
)