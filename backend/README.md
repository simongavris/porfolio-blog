# Portfolio & Blog - Backend
HTTP-REST API. Communcation over via JSON.

This backend is written with python and done very minimal. A lot of things are still missing.
## Function
Reads all markdown files from a folder and puts them in a JSON array.

Content of file must be valid markdown.

File name must be: ***YYYYMMMDD_title.md***. The file name is then interpreted as blog entry date.

## Components
* **Flask**: web framework to provide endpoints:
    * **GET:posts/** : Get all posts
    * **GET:posts/\<title\>**: Get post by title 
* **Waitress**: WSGI server

## Usage (development)
### Start backend:
```shell script
cd backend
pip install -r requirements.txt
python server.py
