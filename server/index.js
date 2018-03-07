const express = require('express');
const path = require('path');
const { Pool, Client } = require('pg');
const pg = require('pg');

const PORT = process.env.PORT || 5000;
const app = express();

const client = new Client({
  user: 'plwzorgwdohbpq',
  host: 'ec2-54-221-220-59.compute-1.amazonaws.com',
  database: 'der5fabi5cvgqn',
  password: 'e5d4d574b99c7711368c2a0bda068698ba79e7a18ba91bc9affc53fcb283eb2d',
  port: 5432,
  ssl: true
});

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
app.get('/api', function (request, response) {
    client.connect();
    client.query('SELECT * FROM salesforce.Contact', (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(res.rows[0])
        console.log(res.rows)
        response.send(res.rows);
      }
    });
    //request.set('Content-Type', 'application/json');
});

  // Answer API requests.
  app.get('/test', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server! and this is success Aditya"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
