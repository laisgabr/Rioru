package com.github.mrdroox.projects.zoe.structures

import com.github.mrdroox.projects.zoe.Config

class CommandOptions(command: Command, AuthorID: String) {
    init {
        if(command.devsOnly && AuthorID !== Config.get("owner") && AuthorID !== Config.get("co_owner") && AuthorID !== Config.get("developer")) {

        }

    }
}