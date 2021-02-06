package com.mrdrooxbr.projects.iprotator;

import java.io.BufferedReader;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class ShellCommandExecutor {
    public static String executeCommand(String command) {
        final ArrayList<String> commands = new ArrayList<String>();
        commands.add("/bin/bash");
        commands.add("-c");
        commands.add(command);

        BufferedReader br = null;
        String line;
        try {
            final ProcessBuilder p = new ProcessBuilder(commands);
            final Process process = p.start();
            final InputStream is = process.getInputStream();
            final InputStreamReader isr = new InputStreamReader(is);
            br = new BufferedReader(isr);


            while((line = br.readLine()) != null) {
                return line;
            }
        } catch (IOException ioe) {
            return ioe.getMessage();
        } finally {
            secureClose(br);
        }

        return line;
    }

    private static String secureClose(final Closeable resource) {
        try {
            if (resource != null) {
                resource.close();
            }
        } catch (IOException ex) {
            return ex.getMessage();
        }
        return null;
    }
}
