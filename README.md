![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Simple API

### Author: Alexander White

### Links and Resources
* [PR](https://github.com/alex-white-401-advanced-javascript/simple-api/pull/1)
* [travis](https://travis-ci.com/alex-white-401-advanced-javascript/simple-api)

#### Documentation
* [swagger]()
* [jsdoc]()

### HTTP requests
#### `/categories` GET, POST
GET: 
* `http :3000/categories`
POST: 
* `echo '{"name":"Games", "display_name":"Video Games", "description":"Lose yourself in a vivid experience!"}' | http :3000/categories`
* `echo '{"name":"Board Games", "display_name":"Family Time", "description":"Gather the family for some quality time"}' | http :3000/categories`
* `echo '{"name":"skate", "display_name":"Roller or Board", "description":"Roll away...just roll away"}' | http :3000/categories`

#### `/categories/:id/` PUT, DELETE
PUT: 
* `echo '{"name":"skate", "display_name":"Skateboard", "description":"Always wear a helmet"}' | http put :3000/categories/3`
DELETE: 
* `http delete :3000/categories/1`

#### `/products` GET, POST
GET:
* `http :3000/products`
POST:
* `echo '{"name":"Halo", "display_name":"Halo", "description":"Play as Master Chief taking on hordes of Covenant","category":"Games"}' | http :3000/products`
* `echo '{"name":"Catan", "display_name":"Catan", "description":"Collect the resources and screw your friends","category":"Board Games"}' | http :3000/products`
* `echo '{"name":"Skateboard", "display_name":"Skateboard", "description":"Get a board, join a gang, conquer the world","category":"skate"}' | http :3000/products`

#### `/products/:id/` PUT, DELETE
PUT: 
* `echo '{"name":"Caverna", "display_name":"Caverna", "description":"Way better than Catan with less screwing your friends!","category":"candy", "_id":2}' | http put :3000/products/2`
DELETE: 
* `http delete :3000/products/3`

### Modules

### Setup
#### `.env` requirements
* `npm i`
* `PORT` - assign a port number
* `MONGODB_URI` - URL to the running mongo instance/db


#### Running the app
* `npm start`
* Endpoint: `/`
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made?
* What assertions need to be / should be made?


json-server --watch ./data/db.json
http http://localhost:3000/categories

echo '{"_id": "", "name": "", "display_name": "", "description": ""}' | http :3000/categories

echo '{"_id": "","category": "",  "name": "", "display_name": "", "description": ""}' | http :3000/products

