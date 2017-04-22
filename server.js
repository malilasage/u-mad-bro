var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var path = require('path');

app.use(express.static(path.join(__dirname, '/client')))

app.get('/api', function(req, res) {
  res.send('cool');
})

app.listen(port, function() {
  console.log('listening on port ' + port);
})
