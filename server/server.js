var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var path = require('path');

app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, '/../', 'client')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.get('/emotion', (req, res) => {
  res.send('blue');
})

app.listen(port, () => {
  console.log('listening on port ' + port);
})
