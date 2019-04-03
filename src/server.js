const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname,'../public');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);



app.use(express.static(publicPath));


io.on('connection', function(socket){
    console.log('new user connected');

    socket.on('createmessage', function(message){
        console.log('new', message);
        io.emit('newMessage', {from:message.from, text:message.text});
    })

    socket.on('disconnect', function(){
        console.log('User was disconnected');  
    });
});

server.listen(process.env.PORT||4500, ()=>{
    console.log('server is live');
    
})
console.log(publicPath);
console.log('https://chat-app9605.herokuapp.com/')
