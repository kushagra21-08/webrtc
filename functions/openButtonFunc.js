const openButtonFunc = async () => {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject =  await navigator.mediaDevices.getUserMedia({ video: true});

        remoteStream = new MediaStream();
        remoteVideo.srcObject = remoteStream;

        openButton.disabled = true;
        createButton.disabled = false;
        joinButton.disabled = false;
        hangupButton.disabled = false;
    } catch (error) {
        console.log(error)
    }
}
