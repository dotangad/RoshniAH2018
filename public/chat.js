const express = require("../../express");

var socket = require("../../socket.io");

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

const server = app.listen(8080, function() {
	console.log("listening to port 8080");
}); 

var io = socket(server);

io.on('connection', function(socket) {
	console.log("Made connection with server ", socket.id);

	socket.on('chat', function(data) {
		console.log("Recieved");
		io.sockets.emit('chat', data);
	});	

	
});

