
feather.replace();

$('#player').css('transform-origin', 'top left')

var scale = 1.0
var offset = {x: 0, y: 0}

// ZOOM 
function zoom(value) {
    console.log('zoom', value)
    $('#zoom').text(value+"%")
    Cookies.set('zoom', value)
    
    scale = value/100.0
    $('#player').css('transform', 'scale('+scale+') translate('+offset.x+'px, '+offset.y+'px)')
}

// POSITION
function position(pos) {
    pos.x = Math.round(pos.x)
    pos.y = Math.round(pos.y)
    console.log('position', pos)
    $('#x').text(pos.x+" px")
    $('#y').text(pos.y+" px")
    Cookies.set('position', JSON.stringify(pos))

    offset.x = pos.x/scale
    offset.y = pos.y/scale
    $('#player').css('transform', 'scale('+scale+') translate('+offset.x+'px, '+offset.y+'px)')
}


// SocketIO
//
const socket = io()

socket.on('hello', () => {
    console.log('================ hello ================')
    socket.emit('hi', uuid)
});

socket.on('zoom', (data) => {
    zoom(data)
})

socket.on('position', (data) => {
    position(data)
})

socket.on('positions', (data) => {
    if (data[uuid]) 
        position(data[uuid])
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
    touchStart = {x: e.touches[0].clientX, y: e.touches[0].clientY}
}

function touchMoveHandler(e) {
    // e.preventDefault()
    var pos = {x: e.touches[0].clientX - touchStart.x, y: e.touches[0].clientY - touchStart.y}
    socket.emit('move', uuid, pos)
    touchStart = {x: e.touches[0].clientX, y: e.touches[0].clientY}
}

function touchEndHandler(e) {
    // e.preventDefault()
    touchStart = null
}

document.addEventListener('touchstart', touchStartHandler, false)
document.addEventListener('touchmove', touchMoveHandler, false)
document.addEventListener('touchend', touchEndHandler, false)



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

// INFO
//

// RESOLUTION
$('#resolution').text(window.innerWidth+"x"+window.innerHeight)
// document.querySelector("meta[name=viewport]").setAttribute('content', 'width=device-width, initial-scale='+(1/window.devicePixelRatio)+', maximum-scale=1.0, user-scalable=0');

// DEVICE RATIO
$('#ratio').text("ratio: "+window.devicePixelRatio)


// PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }