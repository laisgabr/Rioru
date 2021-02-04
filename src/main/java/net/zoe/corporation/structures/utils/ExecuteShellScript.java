package net.zoe.corporation.structures.utils;

import java.io.BufferedReader;
import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class ExecuteShellScript {
    
    public String executeCommand(final String command) throws IOException {
        
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
    
    private String secureClose(final Closeable resource) {
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
