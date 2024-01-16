
class VideoPlayer {
    
    // constructor
    constructor(uuid, container) {
        this.uuid = uuid
        this.container = $(container);
        
        this.stage = $('<div class="stage"></div>').appendTo(this.container);
        this.scale(1.0)
        
        this.video = $('<video class="player" autoplay muted loop></video>').appendTo(this.stage);
        this.videoscale = 1.0
        this.position({x: 0, y: 0})
        this.zoom(1.0)
    }

    // stage scale 0->1
    scale(s) {
        // console.log('scale', s)
        $('#scale').text( Math.round(s*100) +"%")
        this.stagescale = Math.max(0.1, s)
        this.stage.css('transform', 'scale('+this.stagescale+')')
    }

    // video zoom
    zoom(z) {
         // console.log('zoom', z)
        $('#zoom').text( Math.round(z*100) +"%")
        this.videoscale = Math.max(0.1, z)
        this.video.css('transform', 'scale('+this.videoscale+') translate('+this.videooffset.x/this.videoscale+'px, '+this.videooffset.y/this.videoscale+'px)')
    }

    // video position
    position(pos) {
        pos.x = Math.round(pos.x)
        pos.y = Math.round(pos.y)
        // console.log('position', pos)
        $('#x').text(pos.x+" px")
        $('#y').text(pos.y+" px")
        this.videooffset = pos
        this.video.css('transform', 'scale('+this.videoscale+') translate('+this.videooffset.x/this.videoscale+'px, '+this.videooffset.y/this.videoscale+'px)')
    }

    play(media) {
        this.video.attr('src', 'video/'+media)
    }

    

}