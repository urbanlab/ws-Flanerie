import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as IoServer } from "socket.io";
import Conf from 'conf';
import fs from 'fs';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;
// const options={
//   key:fs.readFileSync(path.join(__dirname,'./cert/key.pem')),
//   cert:fs.readFileSync(path.join(__dirname,'./cert/cert.pem'))
// }

const config = new Conf({projectName: 'panoptic'});
// config.clear();

var app = express();
var server = HttpServer(app);
var io = new IoServer(server);

var zoom = config.get('zoom', 1.0);

var devices = config.get('devices', {});

// Create a new device entry if it doesn't exist
function bootstrapDevice(uuid, reso) {
  if (!uuid) return;
  devices[uuid] = devices[uuid] || {position: {x: 0, y: 0}, resolution: reso || {x: 100, y: 100}};
}

// Save devices to config and emit to clients
function updateDevices() {
  config.set('devices', devices);
  io.emit('devices', devices);
}

// Save Zoom to config and emit to clients
function updateZoom() {
  config.set('zoom', zoom);
  io.emit('zoom', zoom);
  console.log('zoom', zoom);
}

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Client is ready to receive initial data
  socket.on('hi', (uuid, reso) => 
  {
    bootstrapDevice(uuid, reso);
    updateDevices();
    socket.emit('zoom', zoom);
    socket.emit('play', '0_small.mp4')
  })
  
  socket.on('zoomPlus', () => {
    zoom += 0.1;
    updateZoom()
  })

  socket.on('zoomMinus', () => {
    zoom -= 0.1;
    zoom = Math.max(0.1, zoom);
    updateZoom()
  })

  socket.on('move', (uuid, delta) => 
  {
    // console.log('move', uuid, delta);
    bootstrapDevice(uuid);
    devices[uuid].position.x += delta.x;
    devices[uuid].position.y += delta.y;
    updateDevices();
  })

  socket.on('moveAll', (delta) => 
  {
    console.log('moveAll', devices);

    for (let uuid in devices) {
      devices[uuid].position.x += delta.x;
      devices[uuid].position.y += delta.y;
    }

    updateDevices();
  })

  socket.on('setPosition', (uuid, pos) => 
  {
    console.log('setPosition', uuid, pos);

    bootstrapDevice(uuid);
    devices[uuid].position = pos;
    updateDevices();
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

app.get('/control', function(req, res) {
  res.sendFile(__dirname + '/www/control.html');
});

app.use(express.static('www'));



