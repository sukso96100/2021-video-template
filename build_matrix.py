import os
import json

include = []
lsdir = "params/"
files = os.listdir(lsdir)
for i in files:
  if i.endswith(".json"):
    with open(lsdir+i) as json_file:
      json_data = json.load(json_file)
      include.append({
          "path": i,
          "output": i.replace(".json", ".mp4"),
          "videoPath": json_data["videoPath"]
      })
matrix = { "include": include }
json.dump(matrix, open("matrix.json", "w"), indent=4)