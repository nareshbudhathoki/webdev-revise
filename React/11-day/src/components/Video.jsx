import { useRef } from "react";
function Video(){

    const videoRef = useRef(null);

    function handleStart(){
        videoRef.current.play();
    }

    function handleStop(){
        videoRef.current.pause();
    }

    function handlRestart(){
        videoRef.current.currentTime = 0;
    }

    function handleForward(){
        videoRef.current.currentTime +=10;
    }

    function handleBacward(){
        videoRef.current.currentTime -= 10;
    }

    return(
        <>
        <video ref={videoRef} src="video.mp4" width={600} height={400} controls></video>
        <div>
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>pause</button>
            <button onClick={handlRestart}>restart</button>
            <button onClick={handleBacward}>Backward</button>
            <button onClick={handleForward}>Forward</button>
        </div>
        </>
    )
}
export default Video;