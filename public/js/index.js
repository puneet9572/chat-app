let socket = io();

socket.on('connect', function(){
    console.log('connected');  
});
socket.on('disconnect', function(){
    console.log('Disconnect from server');
    
});

socket.on('newMessage', function(data){
    console.log('newEmail', data);
    
});