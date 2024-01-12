
// FULLSCREEN
function fullscreen() 
{
    // check if fullscreen
    var isFullscreen = (document.fullscreenElement || document.webkitFullscreenElement 
        || document.mozFullScreenElement || document.msFullscreenElement);

    if (isFullscreen) {
        var el = document;
        var requestMethod = el.exitFullscreen || el.webkitExitFullscreen 
        || el.mozCancelFullScreen || el.msExitFullscreen;
        requestMethod.call(el);
        return;
    }    
    else {    
        var el = document.documentElement;
        var requestMethod = el.requestFullscreen || el.webkitRequestFullscreen 
        || el.mozRequestFullScreen || el.msRequestFullscreen;
        requestMethod.call(el);
    }
}

