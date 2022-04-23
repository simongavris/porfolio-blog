# Portfolio and Blog with React
With this project I wanted to experiment with react, create a website
that mostly consists of a blog where the blog is managed with markdown files - having a folder with markdown files as the CMS

## Status
The project is discontinued and this repositry serves as a archive for myself.

## Components

### [Backend](backend/README.md)
* Written in Python
* Reads markdown files from folder and serves as JSON via HTTP-Rest

### [Frontend](frontend/README.md)
* Written with React
* Serves pages:
    * Start
    * About
    * Blog - Overview
    * Blog - Posts
    
### [Nginx](nginx/README.md)
This component only serves as a reverse proxy to delegate the requests to either the frontend or the backend.

## Usage
### Development (local)
Local development works without nginx.
#### Start backend:
```shell script
cd backend
pip install -r requirements.txt
python server.py
```
#### Start frontend:
```shell script
cd frontend
npm install
npm run start
```

### Development (Docker)
```shell script
docker-compose up -d
```

### Production (Docker)
```shell script
docker-compose up -f docker-compose.prod.yml
```
