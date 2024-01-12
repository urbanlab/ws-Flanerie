
feather.replace();

$('#player').css('transform-origin', 'top left')

var scale = 1.0
var offset = {x: 0, y: 0}   // unscaled offset

var devices = {}

// ZOOM 
function zoom(value) {
    // console.log('zoom', value)
    $('#zoom').text(value+"%")
    Cookies.set('zoom', value)
    
    scale = value/100.0
    $('#player').css('transform', 'scale('+scale+') translate('+offset.x/scale+'px, '+offset.y/scale+'px)')
}

// POSITION
function position(pos) {
    pos.x = Math.round(pos.x)
    pos.y = Math.round(pos.y)
    // console.log('position', pos)
    $('#x').text(pos.x+" px")
    $('#y').text(pos.y+" px")
    Cookies.set('position', JSON.stringify(pos))

    offset = pos
    $('#player').css('transform', 'scale('+scale+') translate('+offset.x/scale+'px, '+offset.y/scale+'px)')
}


// SocketIO
//
const socket = io()

socket.on('hello', () => {
    console.log('================ hello ================')
    updateSize()
});

socket.on('zoom', (data) => {
    zoom(data)
})

socket.on('devices', (data) => {
    // console.log('devices', data)
    devices = data
    if (devices[uuid]) {
        position(devices[uuid].position)
    }
    else updateSize()
})

$('#zoomPlus').click(() => {    
    socket.emit('zoomPlus')
})

$('#zoomMinus').click(() => {
    socket.emit('zoomMinus')
})

$('#reset').click(() => {
    socket.emit('setPosition', uuid, {x: 0, y: 0})
})


// TOUCH DRAG
//

var touchStart = null

function touchStartHandler(e) {
    // e.preventDefault()

    // handle both mouse and touch events
    if (e.touches) {
        if (e.touches.length > 1) return // don't handle multitouch
        e = e.touches[0]
    }

    touchStart = {x: e.clientX, y: e.clientY}
}

function touchMoveHandler(e) {
    // e.preventDefault()
    if (!touchStart) return

    // handle both mouse and touch events
    if (e.touches) e = e.touches[0]

    var pos = {x: e.clientX - touchStart.x, y: e.clientY - touchStart.y}
    socket.emit('move', uuid, pos)
    touchStart = {x: e.clientX, y: e.clientY}
}

function touchEndHandler(e) {
    // e.preventDefault()
    touchStart = null
}

$('#stage').on('touchstart mousedown', touchStartHandler)
$('#stage').on('touchmove mousemove', touchMoveHandler)
$('#stage').on('touchend mouseup', touchEndHandler)


// LOAD SETTINGS from local Cookies
//

// UUID
const uuid = Cookies.get('uuid') || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
Cookies.set('uuid', uuid)
$('#uuid').text(uuid)

// ZOOM
zoom(Cookies.get('zoom') || 100)

// POSITION
var pos = Cookies.get('position')
if (pos) pos = JSON.parse(pos)
else pos = {x: 0, y: 0}
position(pos)


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


