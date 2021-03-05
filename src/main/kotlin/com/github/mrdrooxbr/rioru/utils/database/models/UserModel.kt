package com.github.mrdrooxbr.rioru.utils.database.models

import com.github.mrdrooxbr.rioru.utils.database.models.utils.Blacklist

data class UserModel(
    val id: String,
    var blacklist: Blacklist,
    val economySize: String = "0"

    )