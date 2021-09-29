import os
import json

include = []
lsdir = "split_params/"
files = os.listdir(lsdir)
for i in files:
  if i.endswith(".json"):
    with open(lsdir+i) as json_file:
      json_data = json.load(json_file)
      include.append(json_data)
matrix = { "include": include }
json.dump(matrix, open("matrix.json", "w"), indent=4)