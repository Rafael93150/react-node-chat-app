require('dotenv').config(); //Variables d'environnement

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use(express.static('client/build'));

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

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