package com.github.mrdroox.projects.utils

import java.io.*

import java.util.ArrayList

class ShellScriptExecutor {
    companion object {
        @JvmStatic
        fun executeCommand(command: String): String? {
            val commands = ArrayList<String>()
            commands.add("/bin/bash")
            commands.add("-c")
            commands.add(command)
            var br: BufferedReader? = null
            var line: String?
            try {
                val p = ProcessBuilder(commands)
                val process = p.start()
                val `is`: InputStream = process.inputStream
                val isr = InputStreamReader(`is`)
                br = BufferedReader(isr)
                while (br.readLine().also { line = it } != null) {
                    return line
                }
            } catch (ioe: IOException) {
                return ioe.message
            } finally {
                secureClose(br)
            }
            return line
        }

        private fun secureClose(resource: Closeable?): String? {
            try {
                resource?.close()
            } catch (ex: IOException) {
                return ex.message
            }
            return null
        }
    }
}