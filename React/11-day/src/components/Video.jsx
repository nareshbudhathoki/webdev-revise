
function Video(){
    return(
        <>
        <video src="video.mp4" width={600} height={400} controls></video>
        <div>
            <button>start</button>
            <button>pause</button>
            <button>restart</button>
        </div>
        </>
    )
}
export default Video;