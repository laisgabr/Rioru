package website.rioru.projects.rioru

import dev.kord.core.Kord
import dev.kord.core.on
import dev.kord.gateway.Intents
import dev.kord.gateway.PrivilegedIntent
import website.rioru.projects.rioru.utils.Config
import website.rioru.projects.rioru.utils.RioruListener

object Rioru {
    lateinit var me: Kord
    private val listener = RioruListener()

    @OptIn(PrivilegedIntent::class)
    suspend fun createClient() {

        me = Kord(Config.string["discord", "token"]) {
            intents = Intents.all
        }

        with(me) {
            addEvent(listener::onReady)
            addEvent(listener::onMessageCreated)
            login()
        }
    }
}

inline fun <reified T : dev.kord.core.event.Event> Kord.addEvent(crossinline method: suspend (T) -> Unit) {
    this@addEvent.on<T> {
        method(this)
    }
}