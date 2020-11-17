// Make connection

const socket = io.connect('http://localhost:8080');

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

// Emit events

btn.addEventListener('click', function () {
    // When subbmitted, grabs socket from client and sends data to server
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

// Listen for events
socket.on('chat', function(data){
    //listens for 'chat' callback from server and outputs it to browser
    output.innerHTML+='<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
})