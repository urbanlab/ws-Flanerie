import express from 'express';
import { SyncServer } from '@ircam/sync'
import { Server as HttpServer } from 'http';
import { Server as IoServer } from "socket.io";
import Conf from 'conf';
import fs from 'fs';


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

// STATE
//
var state = {
  zoom: config.get('zoom', 1.0),
  offsetTime: 0,
  media: config.get('media', ''),
  paused: false,
  ctrls: false
}

// PLAYLIST from list of files in /video
//
var playlist = fs.readdirSync('./www/video').filter((f) => f.endsWith('.mp4'));

// watch for changes in /video
fs.watch('./www/video', (eventType, filename) => {
  playlist = fs.readdirSync('./www/video').filter((f) => f.endsWith('.mp4'));
  io.emit('playlist', playlist);
})

// SYNC Server
//
const startTime = process.hrtime();
const getTimeFunction = () => {
  const now = process.hrtime(startTime);
  return now[0] + now[1] * 1e-9;
}

const syncServer = new SyncServer(getTimeFunction);

// Devices
//
var devices = config.get('devices', {});
for (let uuid in devices) {
  devices[uuid].alive = false;
}

// Create a new device entry if it doesn't exist
function bootstrapDevice(uuid, reso) {
  if (uuid === undefined) return;
  devices[uuid] = devices[uuid] || {
    position: {x: 0, y: 0}, 
    resolution: {x: 100, y: 100},
    alive: false
  };
  if (reso) devices[uuid].resolution = reso;
  devices[uuid].alive = true;
}

// Save devices to config and emit to clients
function updateDevices() {
  config.set('devices', devices);
  io.emit('devices', devices);
}


// Socket.io Server
//

io.on('connection', (socket) => 
{
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Client is ready to receive initial data
  socket.on('hi', (uuid, reso) => 
  {
    bootstrapDevice(uuid, reso);
    updateDevices();
    socket.emit('state', state)
    socket.emit('playlist', playlist)
  })
  
  // Global zoom
  socket.on('zoom', (z) => {
    state.zoom = z;
    state.zoom = Math.max(0.1, state.zoom);
    config.set('zoom', state.zoom);
    io.emit('state', state);
  })

  // Move device
  socket.on('move', (uuid, delta) => 
  {
    bootstrapDevice(uuid);
    devices[uuid].position.x += delta.x;
    devices[uuid].position.y += delta.y;
    updateDevices();
    // console.log('move', uuid, delta, devices[uuid].position); 
  })

  // Move all devices
  socket.on('moveAll', (delta) => 
  {
    for (let uuid in devices) {
      devices[uuid].position.x += delta.x;
      devices[uuid].position.y += delta.y;
    }
    updateDevices();
  })

  // Set device position
  socket.on('setPosition', (uuid, pos) => 
  {
    console.log('setPosition', uuid, pos);

    bootstrapDevice(uuid);
    devices[uuid].position = pos;
    updateDevices();
  })

  // Clear devices
  socket.on('clearDevices', () => 
  {
    for (let uuid in devices) {
      if (devices[uuid].alive) devices[uuid].alive = false;
      else delete devices[uuid];
    }
    updateDevices();
  })

  // Toggle controls
  socket.on('toggleCtrls', () => 
  {
    state.ctrls = !state.ctrls;
    io.emit('ctrls', state.ctrls);
  })

  // Load and play media
  socket.on('play', (media) => {
    state.offsetTime = getTimeFunction();
    state.media = media;
    state.paused = false;
    config.set('media', state.media);
    io.emit('state', state);
  })

  // Stop media
  socket.on('stop', () => {
    state.media = '';
    state.paused = false;
    config.set('media', state.media);
    io.emit('stop');
  })

  // Pause
  socket.on('pause', () => {
    state.paused = !state.paused;
    io.emit( state.paused ? 'pause' : 'play' );
  })

  // reloadAll
  socket.on('reloadAll', () => {
    io.emit('reload');
  })

  // SYNC Server - client init
  syncServer.start( 
    (...args) => { socket.emit('pong', ...args) },  // send  
    (callback) => { socket.on('ping', (...args) => { callback(...args) }) },  // receive
  );
  
  // Send initial HELLO trigger
  socket.emit('hello');

});


// Express Server
//

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



