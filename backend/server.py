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
            post["date"] = filename.split("_")[0]
            post["content"] = f.read()
        files.append(post)

@app.route("/posts")
def hello():
    files = []
    result = {}
    read_files(files)
    files.sort(key=lambda x: x["date"], reverse=True)
    result["posts"] = files
    return result

if __name__ == "__main__":
    app.run()
