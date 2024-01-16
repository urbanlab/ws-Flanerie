// CONTROL PAGE
feather.replace();

//UUID
const uuid = 0;

var player = new VideoPlayer( uuid, 'body' )
var devices = {}

var touchStart = null

// INIT 
player.scale(0.8)


// DEVICES
//

function addDevice(uuid) 
{
    devices[uuid] = {
        position: {x: 0, y: 0}, 
        resolution: {x: 100, y: 100},
        selected: false,
        dom:  $('<div class="device" id="'+uuid+'"></div>')
    }

    player.stage.append(devices[uuid].dom)

    devices[uuid].dom.on('touchstart mousedown', (e) => {
        e.preventDefault()
        touchStart = {x: e.clientX, y: e.clientY}

        devices[uuid].selected = true
        devices[uuid].dom.addClass('selected')
    })

    devices[uuid].dom.on('touchend mouseup', (e) => {
        e.preventDefault()
        touchStart = null

        devices[uuid].selected = false
        devices[uuid].dom.removeClass('selected')
    })

    devices[uuid].dom.on('touchmove mousemove', (e) => {
        if (!devices[uuid].selected) return

        if (!touchStart) return
        e.preventDefault()

        // handle both mouse and touch events
        if (e.touches) e = e.touches[0]

        var pos = {x:  (touchStart.x - e.clientX)/stagescale, y: (touchStart.y - e.clientY)/stagescale}
        socket.emit('move', uuid, pos)
        touchStart = {x: e.clientX, y: e.clientY}
    })
}

function removeDevice(uuid)
{
    devices[uuid].dom.remove()
    delete devices[uuid]
}

function updateDevice(uuid, data) {
    if (!devices[uuid]) addDevice(uuid)

    devices[uuid].position = data.position
    devices[uuid].resolution = data.resolution

    console.log('updateDevice', uuid, data)
    devices[uuid].dom.css('left', -1*data.position.x)
    devices[uuid].dom.css('top', -1*data.position.y)
    devices[uuid].dom.css('width', data.resolution.x)
    devices[uuid].dom.css('height', data.resolution.y)
}

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
    console.log('devices', data)

    for (let uuid in data)
        updateDevice(uuid, data[uuid])
    
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

// TOUCH DRAG
//

function touchStartHandler(e) {
    e.preventDefault()

    // handle both mouse and touch events
    if (e.touches) {
        if (e.touches.length > 1) return // don't handle multitouch
        e = e.touches[0]
    }
    touchStart = {x: e.clientX, y: e.clientY}
}

function touchMoveHandler(e) {
    if (!touchStart) return
    e.preventDefault()

    // handle both mouse and touch events
    if (e.touches) e = e.touches[0]

    var pos = {x: e.clientX - touchStart.x, y: e.clientY - touchStart.y}
    move(pos)
    touchStart = {x: e.clientX, y: e.clientY}
}

function touchEndHandler(e) {
    e.preventDefault()
    touchStart = null
}

player.stage.on('touchstart mousedown', touchStartHandler)
player.stage.on('touchmove mousemove', touchMoveHandler)
player.stage.on('touchend mouseup', touchEndHandler)


// PLAYER DRAG
player.video.on('touchstart mousedown', ()=>{ drag(0) })

// SCROLL TO SCALE #stage
//

window.addEventListener("wheel", event => {
    const sign = Math.sign(event.deltaY);
    let s = Math.max(0.1, player.stagescale - sign * 0.1);
    player.scale(s)
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
