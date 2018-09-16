// Caleb Bassi
// cbassi
// CMPS 101 - Programming Assignment 1

import java.nio.file.*;
import java.io.*;
import java.util.Scanner;

public class Lex {
    public static void main(String[] args) throws IOException {
        // read cli args
        if (args.length != 2) {
            System.err.println("Need 2 cli args.");
            System.exit(1);
        }
        String inputFilename = args[0];
        String outputFilename = args[1];

        // determine lineCount
        Path path = Paths.get(inputFilename);
        int lineCount = (int) Files.lines(path).count();

        // read lines
        String[] lines = new String[lineCount];
        File inputFile = new File(inputFilename);
        Scanner input = new Scanner(inputFile);
        int lineNum = 0;
        while (input.hasNextLine()) {
            lines[lineNum] = input.nextLine();
            lineNum++;
        }
        input.close();

        // sort indices
        List indices = new List();
        for (int i = 0; i < lineCount; i++) {
            indices.moveFront();
            while ((indices.index() >= 0) && (lines[indices.get()].compareTo(lines[i]) < 0)) {
                indices.moveNext();
            }
            if (indices.index() == -1) {
                indices.append(i);
            } else {
                indices.insertBefore(i);
            }
        }

        // print sorted lines
        PrintWriter outFile = new PrintWriter(new FileWriter(outputFilename));
        indices.moveFront();
        while (indices.index() >= 0) {
            int x = indices.get();
            outFile.println(lines[x]);
            indices.moveNext();
        }
        outFile.close();
    }
}
