package com.riorucorp.projects.rioru.managers.threads

import com.riorucorp.projects.rioru.utilities.Logger

object ThreadManager {
    val threads = ArrayList<Thread>()

    fun createThread(runnable: Runnable): String {
        Logger.info { "THREAD Spawning the thread number ${if (threads.isEmpty()) 1 else threads.size + 1}... " }
        val thread = Thread(runnable).also {
            with(it) {
                name = (if (threads.isEmpty()) 1 else threads.size + 1).toString()
                setUncaughtExceptionHandler { t, e ->
                    run {
                        Logger.error { "THREAD ${t.name} throw a error: ${e.message}" }
                    }
                }
            }
        }

        threads.add(thread)
        thread.start()
        return thread.name
    }

    fun stopThread(threadID: Int): Boolean {
        val threadFind = threads.find { c -> c.name == threadID.toString() }
        if (threadFind == null) {
            Logger.error { "THREAD The thread $threadID not exists to stop" }
            return false
        }
        threadFind.interrupt()
        threads.remove(threadFind)
        Logger.info { "THREAD Stopped the thread $threadID with success" }
        return true
    }

    fun getThread(id: Int): Thread? = threads.find { c -> c.name == id.toString() }
}