var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var router = require('./routes')();

app.use('/', router);
server.listen(8000);


io.sockets.on('connection', function(socket) {

	socket.on('data', function(msg) {

	    console.log(msg);
	});

	socket.emit('ready', {message: 'Ready.'});
});
