import Link from "next/link";
import { font_DelaGothic } from "../utils/fonts";
import { FaStar } from "react-icons/fa";

const Hero = () => {
    let reviewStars = [];

    for (let i=0; i < 3; i++) {
        reviewStars.push(
            <FaStar key={i} className="text-primary" />
        )
    }
    return (
        <section id="home" className="hero relative md:min-h-screen bg-[url('/images/spaceVideoStill.png')] md:bg-none">
            <div className="hero-content text-neutral-content md:absolute left-0 text-center w-full md:max-w-xl ">
                <div className="">
                    <h1 className={`${font_DelaGothic.className} text-2xl md:text-5xl font-bold bg-gradient-to-b from-base-100 via-primary to-secondary inline-block text-transparent bg-clip-text`}>
                        STORMTROOPER 
                    </h1>
                    <div className="flex flex-row justify-between items-center">
                        {reviewStars}
                        <p className={`${font_DelaGothic.className} text-3xl uppercase font-bold bg-gradient-to-b from-secondary via-primary to-base-100 inline-block text-transparent bg-clip-text`}>University</p>
                        {reviewStars}
                    </div>
                    


                    <p className="my-5 max-w-md m-auto text-justify">
                        Use this website as an example for what a single-page site looks like. Single-page websites are optimal for displaying your information without the complexity of multiple pages and menus. If the goal of your website is to display information, a single-page website is suggested.
                    </p>

                    <Link href='#options'>
                        <button className="btn btn-primary">Choose Program</button>
                    </Link>
                </div>
            </div>
    </section>
    );
}

export default Hero;