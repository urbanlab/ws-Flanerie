// TOUCH DRAG
//
var dragUUID = -1;
var touchStart = null

function drag(uuid) { dragUUID = uuid }

// on document ready
$(function() {
    $('body').on('touchstart mousedown', (e)=>{
        // handle both mouse and touch events
        if (e.touches) {
            if (e.touches.length > 1) return // don't handle multitouch
            e = e.touches[0]
        }
        touchStart = {x: e.clientX, y: e.clientY}
    }) 
    $('body').on('touchmove mousemove', (e)=>{
        if (!touchStart) return
    
        // handle both mouse and touch events
        if (e.touches) e = e.touches[0]
    
        var pos = {x: e.clientX - touchStart.x, y: e.clientY - touchStart.y}
        
        
        if (dragUUID != -1) socket.emit('move', dragUUID, pos)

        touchStart = {x: e.clientX, y: e.clientY}
    })
    $('body').on('touchend mouseup', (e)=>{
        touchStart = null
        dragUUID = -1
    })
})



