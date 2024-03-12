feather.replace();

$('#logs').text("hello")

// LOGS
window.onerror = function (message, file, line, column, errorObj) {
    var msg = "ERROR:"
    if (errorObj) {
        msg += message+ " "
        msg += errorObj.stack
    }
    else {
        msg += message
        msg += " at " + file + ":" + line
    }
    alert(msg)
}

// URL PARAMS
const urlParams = new URLSearchParams(window.location.search);

// UUID
//
const uuid = urlParams.get('uuid') || Cookies.get('uuid') || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
Cookies.set('uuid', uuid)
$('#uuid').text(uuid)
// $('#uuid').text(urlParams)

// SocketIO
//
const socket = io()

// Get ROOM from URL
var room = urlParams.get('room') || window.location.pathname.split('#')[0].split('?')[0].split('/').pop()
if (!room) room = 'default'
console.log('room', room)

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
    if (!data[room] || !data[room][uuid] || !data[room][uuid].alive) updateSize()
    else player.position(data[room][uuid].position)
})

socket.on('ctrls', (data) => {
    console.log('ctrls', data)
    if (data) $('#controls').show()
    else $('#controls').hide()
})

socket.on('state', (data, from) => {
    console.log('state', data, from)
    if (data.ctrls) $('#controls').show()
    else $('#controls').hide()
})

socket.on('reload', () => {
    location.reload()
})


// CONTROLS
//

$('#zoomPlus').click(() => {    
    socket.emit('zoom', room, player.videoscale + 0.1)
})

$('#zoomMinus').click(() => {
    socket.emit('zoom', room, Math.max(0.1, player.videoscale - 0.1))
})

$('#reset').click(() => {
    socket.emit('setPosition', uuid, room, {x: 0, y: 0})
})


// DRAG TO OFFSET VIDEO
//
player.video.on('drag', (e, delta) => {
    socket.emit('move', uuid, room, delta)
})

player.backstage.on('drag', (e, delta) => {
    socket.emit('move', uuid, room, delta)
})

// ORIENTATION / RESOLUTION CHANGE
//

function updateSize() {
    $('#resolution').text(window.innerWidth+"x"+window.innerHeight)
    $('#ratio').text("ratio: "+window.devicePixelRatio)
    socket.emit('hi', uuid, room, {x: window.innerWidth, y: window.innerHeight})
}
$(window).on('orientationchange resize ready', updateSize)

// SCROLL TO SCALE #player
//

// window.addEventListener("wheel", event => {
//     const sign = Math.sign(event.deltaY);
//     let s = Math.max(0.1, player.videoscale - sign * 0.1);
//     socket.emit('zoom', room, s)
//     // console.log(stagescale)
// });

// DOUBLE CLICK MENU
//
$(window).on('dblclick', () => {
    $('#controls').toggle()
})


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

    // if (mobileAndTabletCheck())
    $('#welcome').hide()
    wakeLock()
    fullscreen() 
    player.play()
})

setTimeout(() => {
    if (urlParams.has('go')) $('#go').click()
}, 1000)