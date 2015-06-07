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
  res.render('index', {title: 'Hey', message: 'Hello there!', data: data});
});

app.get('/hungry', function(req, res) {
  var random_restau = _.sample(data.restaurants);
  res.send(random_restau);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
