import os
import json

include = []
files = os.listdir("params")
for i in files:
  if i.endswith(".json"):
    include.append({
        "path": i,
        "output": i.replace(".json", ".mp4")
    })
matrix = { "include": include }
json.dump(matrix, open("matrix.json", "w"), indent=4)