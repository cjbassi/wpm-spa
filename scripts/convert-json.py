#!/usr/bin/env python

import json
import sys

if __name__ == '__main__':
    in_file = sys.argv[1]
    out_file = sys.argv[2]

    with open(in_file) as f:
        quotes = json.load(f)

    dict = {}
    for item in quotes:
        dict[item[3]] = {
            'author': item[0],
            'context': item[1],
            'text': item[2]
        }

    print(len(quotes))
    print(len(dict))

    with open(out_file, 'w') as f:
        json.dump(dict, f)
