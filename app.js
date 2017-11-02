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

function apl(state, filter) {
  app.get('/'+state+'/list', function(req, res) {
    var list = data.filter(filter)
    res.send(list);
  });
}

function apr(state, filter) {
  app.get('/'+state+'/random', function(req, res) {
    var random = _.sample(data.filter(filter));
    res.send(random);
  });
}

function apb(state, filter) {
  apl(state, filter);
  apr(state, filter);
}

apb('hungry', x => x.lunch);
apb('thirsty', x => x.drink);
apb('both', x => x.lunch && x.drink);

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});
