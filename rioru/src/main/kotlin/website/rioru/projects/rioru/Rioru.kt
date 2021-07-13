package website.rioru.projects.rioru

import dev.kord.core.Kord
import dev.kord.core.builder.kord.Shards
import dev.kord.core.on
import dev.kord.gateway.Intent
import dev.kord.gateway.Intents
import dev.kord.gateway.PrivilegedIntent
import kotlinx.coroutines.delay
import website.rioru.projects.rioru.utils.Config
import website.rioru.projects.rioru.utils.RioruListener
import kotlin.reflect.KFunction1

object Rioru {
    lateinit var me: Kord
    private val listener = RioruListener()

    @OptIn(PrivilegedIntent::class)
    suspend fun createClient() {
        val client = Kord(Config.string["discord", "token"]) {
            intents = Intents(Intent.GuildMembers)
            sharding { recommended -> Shards(recommended) }
        }.also {
            me = it
        }

        client.addEvent(listener::onReady)
        delay(2000)

        client.login()
    }
}

inline fun <reified T : dev.kord.core.event.Event> Kord.addEvent(method: KFunction1<T, Unit>) {
    this@addEvent.on<T> {
        method.call(this)
    }
}
