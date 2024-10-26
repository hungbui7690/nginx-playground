/*
  Load Balancer
  - https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/

    # round robin -> send from the first to the last
    # least connections 
    # least time
    # ...

  1. create server/index.js
  2. package.json
  3. Dockerfile
    - docker build . -t myserver
    - create multiple servers: 
      # docker run -p 1111:7777 -d myserver
        docker run -p 2222:7777 -d myserver
        docker run -p 3333:7777 -d myserver
  4. nginx.conf -> setup load balancer
    -> when we connect to port 5000 -> we go will go to the docker servers 



*/

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.listen(7777, () => {
  console.log('🚀 Listening on port 7777...')
})
