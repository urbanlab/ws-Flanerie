
// // Browserified + Babelified version of https://github.com/chrisguttandin/timing-provider
// // Connecting to local server https://github.com/chrisguttandin/timing-provider-server
// const timingProvider = new TimingProvider('ws://10.2.8.99:4567');  
// // timing object
// var to = new TIMINGSRC.TimingObject({provider:timingProvider});

// // set up video sync
// var sync1 = MCorp.mediaSync(document.getElementById('player1'), to);

// // set up video sync
// var sync2 = MCorp.mediaSync(document.getElementById('player2'), to);


// CONTROL PAGE
feather.replace();

//UUID
const uuid = 0;

// SocketIO
//
const socket = io()

// Players
//
var player = new SyncPlayer( socket, uuid, 'body' )
var devices = new DevicePool( player )

var touchStart = null

// INIT 
player.scaleStage(0.5)
player.moveStage({x: 220, y: 100})




socket.on('hello', () => {
    console.log('================ hello ================')
    socket.emit('hi', uuid, {x: window.innerWidth, y: window.innerHeight})
});

socket.on('zoom', (data) => {
   player.zoom(data)
})

socket.on('devices', (data) => {
    devices.update(data)
})

socket.on('playlist', (data) => {
    // Create button for each video
    $('#playlist').empty()
    data.forEach((v) => {
        $('#playlist').append(`<button class="btn" onclick="socket.emit('play', '${v}')">${v}</button><br />`)
    })
})

$('#zoomPlus').click(() => {    
    socket.emit('zoom', player.videoscale + 0.1)
})

$('#zoomMinus').click(() => {
    socket.emit('zoom', Math.max(0.1, player.videoscale - 0.1))
})

$("#ctrls").click((e) => {
    socket.emit('toggleCtrls')
})

$('#clear').click(() => {
    socket.emit('clearDevices')
})

$('#alive').click(() => {
    $('.device').not('.alive').toggle()
})

$('#0small').click(() => {
    socket.emit('play', '0_small.mp4')
})

$('#bbb').click(() => {
    socket.emit('play', 'bbb.mp4')
})

$('#pause').click(() => {
    socket.emit('pause')
})

$('#stop').click(() => {
    socket.emit('stop')
})

// DRAG VIDEO -> MOVE ALL DEVICES
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

// SCROLL TO SCALE STAGE
window.addEventListener("wheel", event => {
    const sign = Math.sign(event.deltaY);
    let s = Math.max(0.1, player.stagescale - sign * 0.1);
    player.scaleStage(s)
    // console.log(stagescale)
});


// CONTROLS / INFO
//

// RELOAD
$('#reloadAll').click(() => {
    socket.emit('reloadAll')
})

