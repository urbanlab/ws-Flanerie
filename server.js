import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as IoServer } from "socket.io";
import Conf from 'conf';

const __dirname = new URL('.', import.meta.url).pathname;

const config = new Conf({projectName: 'panoptic'});

var app = express();
var server = HttpServer(app);
var io = new IoServer(server);

var zoom = config.get('zoom', 100);
var positions = config.get('positions', {});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Client is ready to receive initial data
  socket.on('hi', (uuid) => {
    positions[uuid] = positions[uuid] || {x: 0, y: 0};
    config.set('positions', positions);
    socket.emit('position', positions[uuid]);
    socket.emit('zoom', zoom);
  })
  
  socket.on('zoomPlus', () => {
    zoom += 10;
    config.set('zoom', zoom);
    console.log('zoomPlus', zoom);
    io.emit('zoom', zoom);
  })

  socket.on('zoomMinus', () => {
    zoom -= 10;
    config.set('zoom', zoom);
    console.log('zoomMinus', zoom);
    io.emit('zoom', zoom);
  })

  socket.on('move', (uuid, delta) => 
  {
    positions[uuid].x += delta.x;
    positions[uuid].y += delta.y;
    config.set('position', uuid, positions[uuid]);
    console.log('move', uuid, delta);
    socket.emit('position', positions[uuid]);
  })

  socket.on('moveAll', (delta) => {
    for (let key in positions) {
      positions[key].x += delta.x;
      positions[key].y += delta.y;
    }

    config.set('positions', positions);
    console.log('moveAll', positions);
    io.emit('positions', positions);
  })

  socket.on('setPosition', (uuid, pos) => {
    positions[uuid] = pos;
    config.set('positions', positions);
    console.log('setPosition', uuid, pos);
    socket.emit('position', pos);
  })

  // Send initial HELLO trigger
  socket.emit('hello');
});

server.listen(3000, function() {
  console.log('listening on *:3000');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/index.html');
});

app.use(express.static('www'));



