
feather.replace();


// UUID
const uuid = Cookies.get('uuid') || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
Cookies.set('uuid', uuid)
$('#uuid').text(uuid)

// PLAYER
var player = new VideoPlayer( uuid, 'body' )
var devices = {}

var touchStart = null



// SocketIO
//
const socket = io()

socket.on('hello', () => {
    console.log('================ hello ================')
    updateSize()
});

socket.on('zoom', (data) => {
    player.zoom(data)
})

socket.on('devices', (data) => {
    // console.log('devices', data)
    devices = data
    if (devices[uuid]) {
        player.position(devices[uuid].position)
    }
    else updateSize()
})

socket.on('play', (data) => {
    player.play(data)
})


// CONTROLS
//

$('#zoomPlus').click(() => {    
    socket.emit('zoomPlus')
})

$('#zoomMinus').click(() => {
    socket.emit('zoomMinus')
})

$('#reset').click(() => {
    socket.emit('setPosition', uuid, {x: 0, y: 0})
})


// TOUCH SELECT
//
dragable( player.stage, (pos) => {
    
})

player.stage.on('touchstart mousedown', ()=>{ drag(uuid) })


// ORIENTATION / RESOLUTION CHANGE
//

function updateSize() {
    $('#resolution').text(window.innerWidth+"x"+window.innerHeight)
    $('#ratio').text("ratio: "+window.devicePixelRatio)
    socket.emit('hi', uuid, {x: window.innerWidth, y: window.innerHeight})
}

window.addEventListener("orientationchange", function() { updateSize() })
window.addEventListener("resize", function() { updateSize() })
updateSize()

// SCROLL TO SCALE #player
//

window.addEventListener("wheel", event => {
    const sign = Math.sign(event.deltaY);
    let s = Math.max(0.1, player.videoscale - sign * 0.1);
    player.zoom(s)
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


