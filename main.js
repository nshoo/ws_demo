const { Server } = require("socket.io");
const io = new Server(server);

const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

io.on('connection', (socket) => {
    console.log('a user connected');
  });