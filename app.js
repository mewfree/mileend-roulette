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

function apl(state) {
  app.get('/'+state+'/list', function(req, res) {
    var list = data[state];
    res.send(list);
  });
}

function apr(state) {
  app.get('/'+state+'/random', function(req, res) {
    var random = _.sample(data[state]);
    res.send(random);
  });
}

function apb(state) {
  apl(state);
  apr(state);
}

apb('hungry');
apb('thirsty');
apb('both');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
