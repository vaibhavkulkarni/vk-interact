var constraints = {audio: true, video: true};

var errorCallback = function(e) {
    console.log('Reeeejected!', e);
};

function successCallback(localMediaStream) {
    attachMediaStream(remoteVideo, localMediaStream);
    attachMediaStream(localVideo, localMediaStream);
}

function start() {
    getUserMedia(constraints, successCallback, errorCallback);
}
