

const socket = io()

const syncPlayer = new SyncPlayer( socket, document.getElementById('player1') );

// unmute on click player1
document.getElementById("player1").addEventListener("click", function() {
    document.getElementById('player1').muted = false;
});
