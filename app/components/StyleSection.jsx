import Hero from "./Hero";
import Video from "./Video";

const StyleSection = () => {
    return (
      <div>
        <div>
            <video 
                playsInline 
                autoPlay 
                loop 
                muted
                className="object-cover top-0 left-0 z-[-1] h-screen w-full"
            >
              <source src='/videos/deathstar_video.mp4'
            type="video/mp4" />
            </video>
        </div>
      </div>
    );
}

export default StyleSection;