import Image from "next/image";
import { mockUpData } from "../data/mockUpData";
import Transition from "../utils/Transition";
import { font_Orbitron } from "../utils/fonts";

const SocialMedia = () => {

    const MockUp = ({ img, name, alt, followers, delay, profileImage }) => {
        return(
            <Transition delay={delay}>
                <section id="socialmedia" className="mockup-phone">
                    <div className="hidden sm:flex camera" />
                    <div className="display relative">
                        <div className="artboard phone-1 pt-7 pl-3 max-w-[160px] max-h-96 sm:max-w-[260px] sm:max-h-full md:max-w-[280px]">
                            {/* background image */}
                            <Image 
                                src={img}
                                alt={alt}
                                fill
                                className="object-cover opacity-60"
                            />
                            {/* header: name and followers */}
                            <div className="flex flex-row">
                                <div className="avatar">
                                    <div className="w-8 rounded-full border">
                                    <Image 
                                        src={profileImage}
                                        alt={alt}
                                        fill
                                        className="rounded-full border"
                                    />
                                    </div>
                                </div>
                                <div className="ml-3 text-white relative">
                                    <h4 className="text-xs font-bold">{name}</h4>
                                    <p className="text-[0.65rem]">{followers} Followers</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </Transition>
            
        )
    }

    return (
        <section id="socialMedia" className="pt-12">
            <div className='container m-auto'>
                <div className="justify-between py-12 grid grid-cols-2 xl:grid-cols-4">
                    {mockUpData.map(({ id, img, alt, name, followers, delay, profileImage }) => (
                        <div key={id} className="">
                            <MockUp {...{img, alt, name, followers, delay, profileImage}} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SocialMedia;