var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);




// Static Servier ==============================
app.use(express.static(__dirname + '/public'));

// Web Socket Server =========================
io.sockets.on('connection', function(socket) {

	socket.on('data', function(msg) {

	    console.log(msg);
	});

	socket.emit('ready', {message: 'Ready.'});
});



app.listen(9000);
