const express = require("express");

var socket = require("socket.io");

const app = express();
const port = 80;

app.use(express.static('public'));



var server = app.listen(port, function() {
	console.log(`Listening to port ${port}`);
});


var io = socket(server);

io.on('connection', function(socket) {
	console.log("Made connection with server ", socket.id);

	socket.on('chat', function(data) {
		console.log("Recieved");
		io.sockets.emit('chat', data);
	});	

	
});
