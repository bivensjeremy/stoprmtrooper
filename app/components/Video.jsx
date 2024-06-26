const Video = () => {
    return (
        <div className="">
            <video 
                playsInline 
                autoPlay 
                loop 
                muted
                className="hidden md:flex object-cover top-0 left-0 absolute z-[-1] w-full"
            >
            <source src='/videos/spaceVideo.mp4'
                type="video/mp4"
                poster="/images/spaceVideoStill.png"  
            />
            </video>
        </div>
    );
};

export default Video;