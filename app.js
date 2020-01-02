var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('appName', 'hello-world');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.all('*', function(req, res){
    res.render('index', {msg : 'As you may have noticed, Easy writing has undergone several changes this year.'});
})

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express.js server linstening on port ' + app.get('port'));
})