import os
import json

include = []
files = os.listdir("params")
for i in files:
  if i.endswith(".json"):
    include.append({
        "path": "params/" + i,
    })
matrix = { "include": include }
json.dump(matrix, open("matrix.json", "w"), indent=4)