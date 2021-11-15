# Trello backend

## Pre-requisites

* nodejs v14.15.0 (Used for development)
* mongodb
  * We can use docker-compose.yml to spin up mongodb locally
  
  
## Steps to setup locally

### Run the app
* `git clone https://github.com/jeeeevs/trello_backend.git`
* `cd trello_backend`
* `docker compose up -d` or `docker-compose up -d`
* Edit `.env` file with mongo DB details (It will already be filled and working, change if required)
* `npm i`
* `npm run dev` or `npm start`

### Test the app
* `npm test`

### Sample Curls to test

* Get all added lists `curl -L -X GET 'http://localhost:3000/list'`
* Add a new list `curl -L -X POST 'http://localhost:3000/list' 
-H 'Content-Type: application/json'
--data-raw '{
    "name": "List 1"
}'`
* Add a new card to a list  `curl -L -X POST 'http://localhost:3000/list/61925769675e5bfa3d18e7b0'
-H 'Content-Type: application/json'
--data-raw '{
    "name": "Card 1"
}'`

