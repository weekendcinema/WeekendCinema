var express = require('express'),
path = require('path'),
app = express(),
mongoClient = require('mongodb').MongoClient,
routes = require(__dirname + '/app/routes'),
config = require(__dirname + '/config.json');

app.use(express.static(__dirname));
app.use('/assets', express.static(__dirname + '/app/assets'));
app.use('/', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/app/routes'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || config.http.port;
var url = config.db.hostName + ':' + config.db.port + '/' + config.db.databaseName;

mongoClient.connect(url, function(err, db) {
  "use strict";
  if (err) throw err;
  routes(app, db,express,path);
  app.listen(port);
  console.log('Weekend Cinema Server listening on port ' + port);
});
