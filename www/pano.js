
feather.replace();


// UUID
const uuid = Cookies.get('uuid') || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
Cookies.set('uuid', uuid)
$('#uuid').text(uuid)

// SocketIO
//
const socket = io()

// PLAYER
var player = new SyncPlayer( socket, uuid, 'body' )

socket.on('hello', () => {
    console.log('========= connected ===========')
    updateSize()
});

socket.on('state', (data) => {
    player.zoom(data.zoom)
})

socket.on('devices', (data) => {
    // console.log('devices', data)
    if (!data[uuid] || !data[uuid].alive) updateSize()
    else player.position(data[uuid].position)
})

socket.on('ctrls', (data) => {
    console.log('ctrls', data)
    if (data) $('#controls').show()
    else $('#controls').hide()
})

socket.on('state', (data) => {
    console.log('state', data)
    if (data.ctrls) $('#controls').show()
    else $('#controls').hide()
})


// CONTROLS
//

$('#zoomPlus').click(() => {    
    socket.emit('zoom', player.videoscale + 0.1)
})

$('#zoomMinus').click(() => {
    socket.emit('zoom', Math.max(0.1, player.videoscale - 0.1))
})

$('#reset').click(() => {
    socket.emit('setPosition', uuid, {x: 0, y: 0})
})


// DRAG TO OFFSET VIDEO
//
player.video.on('drag', (e, delta) => {
    socket.emit('move', uuid, delta)
})

player.backstage.on('drag', (e, delta) => {
    socket.emit('move', uuid, delta)
})

// ORIENTATION / RESOLUTION CHANGE
//

function updateSize() {
    $('#resolution').text(window.innerWidth+"x"+window.innerHeight)
    $('#ratio').text("ratio: "+window.devicePixelRatio)
    socket.emit('hi', uuid, {x: window.innerWidth, y: window.innerHeight})
}
$(window).on('orientationchange resize ready', updateSize)

// SCROLL TO SCALE #player
//

window.addEventListener("wheel", event => {
    const sign = Math.sign(event.deltaY);
    let s = Math.max(0.1, player.videoscale - sign * 0.1);
    socket.emit('zoom', s)
    // console.log(stagescale)
});


// CONTROLS / INFO
//

// RELOAD
$('#reload').click(() => {
    location.reload()
})

// PWA
// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//       navigator.serviceWorker
//         .register("/serviceWorker.js")
//         .then(res => console.log("service worker registered"))
//         .catch(err => console.log("service worker not registered", err))
//     })
//   }

$('#fullscreen').click(() => {
    fullscreen()
})


// WELCOME BUTTON
//

$('#go').click(() => {

    // fullscreen() 
    wakeLock()
    $('#welcome').hide()
})


