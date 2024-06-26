import Transition from "../utils/Transition";

const Hero2 = () => {
    return (
      <Transition>
        <div className="container flex m-auto md:h-screen">
        <div className="hero h-3/5 my-auto rounded-3xl bg-[url('/images/hero_background.jpeg')]">
          <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
      </div>
      </Transition>
      
    );
}

export default Hero2;