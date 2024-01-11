
feather.replace();

/* Array of possible browser specific settings for transformation */
var properties = ['transform', 'WebkitTransform', 'MozTransform', 'msTransform', 'OTransform']
var prop = properties[0]

/* Iterators and stuff */    
var i,j,t;

// VIDEO ELEMENT
var video = document.getElementsByTagName('video')[0]

/* Find out which CSS transform the browser supports */
for(i=0,j=properties.length;i<j;i++){
    if(typeof video.style[properties[i]] !== 'undefined'){
        prop = properties[i];
        break;
    }
}


// ZOOM 
function zoom(value) {
    console.log('zoom', value)
    $('#zoom').text(value+"%")
    Cookies.set('zoom', value)
    
    video.style[prop]='scale('+value/100.0+')';    
}

// POSITION
function position(pos) {
    console.log('position', pos)
    $('#x').text(pos.x+" px")
    $('#y').text(pos.y+" px")
    Cookies.set('position', JSON.stringify(pos))

    video.style.left = pos.x+"px"
    video.style.top = pos.y+"px"
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
