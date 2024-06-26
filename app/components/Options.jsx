import Image from "next/image";
import { trooperClasses } from "../data/trooperClasses";
import TrooperModal from "./TrooperModal";
import Transition from "../utils/Transition";
import { font_Orbitron } from "../utils/fonts";


const Options = () => {
    const Card = ({ title, url, desc, descLink, delay }) => {
        return (
          <Transition delay={delay}>
            <div className='card w-56 h-auto md:w-96 bg-base-100'>
              <figure className="h-64 md:h-96 relative mx-4 md:mx-6 mt-6">
                <Image
                  src={url}
                  alt={title}
                  fill
                  className="rounded-xl object-cover bottom-0" 
                />
              </figure>
  
              <div className="card-body items-center text-center">
                <h2 className={`${font_Orbitron.className} card-title text-2xl md:text-3xl text-secondary`}>{title}</h2>
                
                <div className="card-actions">
                  <TrooperModal {...{title, desc, descLink}} />
              </div>
            </div>
          </div>
        </Transition>
      );
    }
    
    return (
      <Transition>
        <section id="options" className="pt-12">
          <div className='container m-auto'>
            <h1 className={`${font_Orbitron.className} text-2xl md:text-5xl text-center text-base-100`}>Choose Your Trooper</h1>

            <div className="flex flex-wrap justify-center lg:justify-between py-12 gap-1">
              {trooperClasses.map(({ title, url, desc, descLink, delay }) => (
                <div key={title}>
                  <Card {...{title, url, desc, descLink, delay}} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Transition>
        
    );
}

export default Options;