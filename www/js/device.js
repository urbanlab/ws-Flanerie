
// DEVICES
//

class Device {

    constructor(uuid, room, player) {
        this.uuid = uuid
        this.position = {x: 0, y: 0}
        this.resolution = {x: 100, y: 100}
        this.selected = false
        this.alive = false
        this.dom =  $('<div class="device" id="'+uuid+'"></div>')
        this.dom.attr('uuid', uuid)
        draggable(this.dom)

        player.stage.append(this.dom)

        this.dom.on('dragstart', () => { this.select(true) })
        this.dom.on('dragend', () => { this.select(false) })

        this.dom.on('drag', (e, delta) => {
            let d = {x: -1*delta.x/player.stagescale, y: -1*delta.y/player.stagescale}
            socket.emit('move', uuid, room, d)
        })
    }

    update(data) {
        this.position = data.position
        this.resolution = data.resolution
        this.alive = data.alive

        if (this.alive) this.dom.addClass('alive')
        else this.dom.removeClass('alive')

        this.dom.css('left', -1*data.position.x)
        this.dom.css('top', -1*data.position.y)
        this.dom.css('width', data.resolution.x)
        this.dom.css('height', data.resolution.y)
    }
    
    remove() {
        this.dom.remove()
    }

    select(s) {
        if (s == undefined) s = !(this.selected)
        this.selected = s
        if (this.selected) this.dom.addClass('selected')
        else this.dom.removeClass('selected')
    }
}        

class DevicePool {

    constructor(room, player) {
        this.devices = {}
        this.player = player
        this.room = room || 'default'
    }

    update(data) 
    {
        if (!data[this.room]) return
        
        for (let uuid in data[this.room]) 
            if (uuid != 0)
            {
                console.log('update', uuid, data[this.room][uuid])
                if (!this.devices[uuid]) this.devices[uuid] = new Device(uuid, this.room, this.player)
                this.devices[uuid].update(data[this.room][uuid])
            }

        for (let uuid in this.devices)
            if (!data[this.room][uuid]) this.remove(uuid)
    }

    remove(uuid) {
        if (!this.devices[uuid]) return
        this.devices[uuid].remove()
        delete this.devices[uuid]
    }

}

