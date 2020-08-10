#!/usr/bin/env python3

import csv
import re
import yaml
from collections import OrderedDict
from pathlib import Path

basic_rules = {}
firstnames = []
lastnames = []

with open('baseball.csv') as f:
  rows = list(csv.reader(f))
  for row in rows:
    for col in row:
      if col:
        items = col.split(' ')
        while len(items) > 2:
          items = items[1:]
        firstnames.append(items[0])
        lastnames.append(items[1])

basic_rules['firstname'] = {
  'groups': [{
    'tags': [],
    'phrases': firstnames,
  }],
}

basic_rules['lastname'] = {
  'groups': [{
    'tags': [],
    'phrases': lastnames,
  }],
}

with open('../src/improvgrammar/band/names.yaml', 'w') as f:
  yaml.dump(basic_rules, f, indent=2)
