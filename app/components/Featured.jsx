import Image from "next/image";
import { featuredImgs } from "../data/featuredImgs";
import Transition from "../utils/Transition";
import { font_DelaGothic, font_Orbitron } from "../utils/fonts";

const Featured = () => {
    return (
        <section id="featured" className="bg-base-200 py-12" >
            <Transition>
                <div className="text-center">
                    <div className="">
                        <h1 className={`${font_Orbitron.className} text-2xl md:text-5xl`}>Not Featured In</h1>
                        <div className="flex flex-wrap gap-4 justify-evenly py-12">
                            {featuredImgs.map(({ title, url }) => (
                                <div key={title}>
                                    <Image
                                        src={url}
                                        alt={title}
                                        className="w-24 md:w-32 h-32"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Transition>
        </section>
        
        
    );
}

export default Featured;