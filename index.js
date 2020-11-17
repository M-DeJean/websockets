const express = require('express');
const socket = require('socket.io')

// App setup
const app = express();
const server = app.listen(8080, function(){
    console.log("listening to requests on port 8080")
})


// Static files
app.use(express.static('public'))

// Socket setup
const io = socket(server)

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);

    // when 'chat' is received from client, passes data through emit function and send it back to all connected clients
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    })
})
