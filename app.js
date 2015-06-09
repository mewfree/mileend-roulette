var express = require('express')
  , stylus = require('stylus')
  , _ = require('lodash')
  , data = require('./data.json');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(stylus.middleware ({
  src: __dirname + '/views',
  dest: __dirname + '/public'
}));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {data: data});
});

app.get('/hungry/random', function(req, res) {
  var random_restau = _.sample(data.restaurants);
  res.send(random_restau);
});

app.get('/hungry/list', function(req, res) {
  var list_restau = data.restaurants;
  res.send(list_restau);
});

app.get('/thirsty/random', function(req, res) {
  var random_bar = _.sample(data.bars);
  res.send(random_bar);
});

app.get('/thirsty/list', function(req, res) {
  var list_bars = data.bars;
  res.send(list_bars);
});

app.get('/both/random', function(req, res) {
  var random_both = _.sample(data.both);
  res.send(random_both);
});

app.get('/both/list', function(req, res) {
  var list_both = data.both;
  res.send(list_both);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
