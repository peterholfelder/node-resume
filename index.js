var express = require('express')
  , http = require('http');
 
 var app = express();
 var server = http.createServer(app);

app.get('/', function(req, res) {
  res.send('this is where peter holfelder\'s node resume will be built.');
});

app.listen(3000)