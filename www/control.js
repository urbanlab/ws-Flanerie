// CONTROL PAGE
feather.replace();

$('#player').css('transform-origin', 'top left')

var videoscale = 1.0
var videooffset = {x: 0, y: 0}

var stagescale = 0.8

var devices = {}

var touchStart = null


// ZOOM 
function zoom(value) {
    // console.log('zoom', value)
    $('#zoom').text(value+"%")
    videoscale = value/100.0
    $('#player').css('transform', 'scale('+videoscale+') translate('+videooffset.x/videoscale+'px, '+videooffset.y/videoscale+'px)')
}

// POSITION
function position(pos) {
    pos.x = Math.round(pos.x)
    pos.y = Math.round(pos.y)
    // console.log('position', pos)
    $('#x').text(pos.x+" px")
    $('#y').text(pos.y+" px")
    videooffset = pos
    $('#player').css('transform', 'scale('+videoscale+') translate('+videooffset.x/videoscale+'px, '+videooffset.y/videoscale+'px)')
}

// MOVE
function move(pos) {
    // console.log('move', pos)
    position({x: videooffset.x + pos.x/stagescale, y: videooffset.y + pos.y/stagescale})
}

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

    $('#stage').append(devices[uuid].dom)

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

        var pos = {x:  touchStart.x - e.clientX, y: touchStart.y - e.clientY}
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
    socket.emit('hi')
});

socket.on('zoom', (data) => {
    zoom(data)
})

socket.on('devices', (data) => {
    console.log('devices', data)

    for (let uuid in data)
        updateDevice(uuid, data[uuid])
    
})

$('#zoomPlus').click(() => {    
    socket.emit('zoomPlus')
})

$('#zoomMinus').click(() => {
    socket.emit('zoomMinus')
})

$('#reset').click(() => {
    position({x: 0, y: 0})
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

$('#player').on('touchstart mousedown', touchStartHandler)
$('#player').on('touchmove mousemove', touchMoveHandler)
$('#player').on('touchend mouseup', touchEndHandler)


// SCROLL TO SCALE #stage
//

window.addEventListener("wheel", event => {
    const sign = Math.sign(event.deltaY);
    stagescale -= sign * 0.1;
    stagescale = Math.max(0.1, stagescale);

    $('#stage').css('transform', 'scale('+stagescale+')')
    // console.log(stagescale)
});



// LOAD SETTINGS
//

// ZOOM
zoom(100)

// POSITION
position({x: 0, y: 0})

// STAGE SCALE
$('#stage').css('transform', 'scale('+stagescale+')')



// CONTROLS / INFO
//

// RELOAD
$('#reload').click(() => {
    location.reload()
})

$('#fullscreen').click(() => {
    fullscreen()
})
