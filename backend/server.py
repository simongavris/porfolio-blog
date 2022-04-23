from flask import Flask
from flask import abort
from flask_cors import CORS
import os

import re

import json
from flask import request

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

files = []

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

def update_db():
    read_files(files)
    files.sort(key=lambda x: x["date"], reverse=True)

@app.route("/posts")
def posts():
    result = {"posts": files}
    return result

@app.route("/posts/<title>")
def single_post(title):
    print("looking for: " + title)
    for f in files:
        if re.sub('[^A-Za-z0-9]+', '_', f['title']) == title:
            return f
    abort(404)

if __name__ == "__main__":
    update_db()
    app.run()
