import { useImperativeHandle, useRef } from 'react';
function Video(props, ref, data) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    return <video ref={videoRef} src={data.file_url} width={300}></video>;
}

export default Video;
