from flask import Flask
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app) #TODO

def read_files(files):
    for filename in os.listdir("resources"):
        post = {}
        with open(os.path.join("resources", filename), 'r') as f:
            content = f.read()
            post["date"] = filename.split("_")[0]
            post["title"] = content.split("\n")[0][2:]
            post["teaser"] = content.partition('\n')[2]
            post["content"] = content
            files.append(post)

@app.route("/posts")
def server():
    files = []
    read_files(files)
    files.sort(key=lambda x: x["date"], reverse=True)
    result = {}
    result["posts"] = files
    return result

if __name__ == "__main__":
    app.run()
