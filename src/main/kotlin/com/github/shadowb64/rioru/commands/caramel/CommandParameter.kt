package com.github.shadowb64.rioru.commands.caramel

@ArgsType(name = "user", type = "member", opcional = true)
fun run(context: CommandContext) {
    //context.user
}

annotation class ArgsType(val name: String, val type: String, val opcional: Boolean)
