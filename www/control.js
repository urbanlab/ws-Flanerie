// CONTROL PAGE
feather.replace();

//UUID
const uuid = 0;

var player = new VideoPlayer( uuid, 'body' )
var devices = new DevicePool( player )

var touchStart = null

// INIT 
player.scaleStage(0.5)
player.moveStage({x: 220, y: 100})


// SocketIO
//
const socket = io()

socket.on('hello', () => {
    console.log('================ hello ================')
    socket.emit('hi', uuid, {x: window.innerWidth, y: window.innerHeight})
});

socket.on('zoom', (data) => {
   player.zoom(data)
})

socket.on('devices', (data) => {
    // console.log('devices', data)
    devices.update(data)
    // if (data[uuid]) player.position(data[uuid].position)
})

socket.on('play', (data) => {
    player.play(data)
})

$('#zoomPlus').click(() => {    
    socket.emit('zoomPlus')
})

$('#zoomMinus').click(() => {
    socket.emit('zoomMinus')
})

$('#reset').click(() => {
    player.position({x: 0, y: 0})
})

$('#clear').click(() => {
    socket.emit('clearDevices')
})

// DRAG VIDEO
player.video.on('drag', (e, delta) => {
    // socket.emit('move', uuid, delta)
    socket.emit('moveAll', delta)

    delta = {x: delta.x*player.stagescale, y: delta.y*player.stagescale}
    player.moveStage(delta)
})

// DRAG STAGE
player.backstage.on('drag', (e, delta) => {
    player.moveStage(delta)
})


// SCROLL TO SCALE #stage
//
window.addEventListener("wheel", event => {
    const sign = Math.sign(event.deltaY);
    let s = Math.max(0.1, player.stagescale - sign * 0.1);
    player.scaleStage(s)
    // console.log(stagescale)
});


// CONTROLS / INFO
//

// RELOAD
$('#reload').click(() => {
    location.reload()
})

$('#fullscreen').click(() => {
    fullscreen()
})
