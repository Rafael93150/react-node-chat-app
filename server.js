require('dotenv').config({path: './config/.env'}); //Variables d'environnement
// require('./config/db.js');

const express = require('express');
// const userRoutes = require('./routes/user.routes');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const path = require('path');
const PORT = process.env.PORT || 5000;

console.log('test');

// app.use(express.json());

// app.use(express.static('client/build'));

// app.get('/*', (_, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'))
// });

// app.get('/', (_, res) => {
//     var path = require('path');
//     res.sendFile(path.resolve(__dirname + '/../public/index.html'));
// })

// app.use('/api/user', userRoutes);
let connectCounter;

io.on('connection', (socket) => {

    socket.on('message', ({name, message}) => {
      if(name == ""){
        name = "Anonymous";
      }
      io.emit('message', {name, message});
    });

    connectCounter = io.engine.clientsCount;
    console.log('a user connected, '+connectCounter+' connected');

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });
});



http.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});