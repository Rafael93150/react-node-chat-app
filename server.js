require('dotenv').config({path: './.env'}); //Variables d'environnement

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 5000;

console.log('test');

let connectCounter;

io.on('connection', (socket) => {

    socket.on('message', ({name, message}) => {
      if(name == ""){
        name = "Anonymous";
      }
      io.emit('message', {name, message});
    });

    connectCounter = io.engine.clientsCount;
    // console.log('a user connected, '+connectCounter+' connected');

    // socket.on('disconnect', () => {
    //   console.log('a user disconnected');
    // });
});



http.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});