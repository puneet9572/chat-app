const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname,'../public');
let app = express();
let server = http.createServer(app);
let io = socketIO(server);



app.use(express.static(publicPath));


io.on('connection', (socket)=>{
    console.log('new user connected');
    
    socket.on('disconnect', ()=>{
        console.log('User was disconnected');
        
    });
});

server.listen(process.env.PORT||4500, ()=>{
    console.log('server is live');
    
})
console.log(publicPath);

