// Caleb Bassi
// cbassi
// CMPS 101 - Programming Assignment 2

#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include "List.h"

#define MAX_LEN 160

int main(int argc, char *argv[]) {
    if (argc != 3) {
        printf("Usage: %s <input file> <output file>\n", argv[0]);
        exit(1);
    }

    FILE *in = fopen(argv[1], "r");
    if (in == NULL) {
        printf("Unable to open file %s for reading\n", argv[1]);
        exit(1);
    }

    int lineCount = 0;
    int ch = 0;
    while (!feof(in)) {
        ch = fgetc(in);
        if (ch == '\n') {
            lineCount++;
        }
    }
    rewind(in);

    char lines[lineCount][MAX_LEN];
    int lineNum = 0;
    while (fgets(lines[lineNum], MAX_LEN, in) != NULL) {
        lineNum++;
    }
    fclose(in);

    List indices = newList();
    for (int i = 0; i< lineCount; i++) {
        moveFront(indices);
        while((index(indices) >= 0) && (strcmp(lines[get(indices)], lines[i]) < 0)) {
            moveNext(indices);
        }
        if (index(indices) == -1) {
            append(indices, i);
        } else {
            insertBefore(indices, i);
        }
    }

    FILE *out = fopen(argv[2], "w");
    if (out == NULL) {
        printf("Unable to open file %s for writing\n", argv[2]);
        exit(1);
    }
    moveFront(indices);
    while (index(indices) >= 0) {
        int i = get(indices);
        fprintf(out, lines[i]);
        moveNext(indices);
    }
    fclose(out);

    return 0;
}
