import { faqData } from "../data/faqData";
import Transition from "../utils/Transition";
import { font_Orbitron } from "../utils/fonts";

const FAQ = () => {
    return (
      <section id="featured" className="bg-base-200 py-12" >
        <Transition>
            <div className="text-center">
                <div className="">
                    <h1 className={`${font_Orbitron.className} text-2xl md:text-5xl`}>Frequently Asked Questions</h1>
                    <div className="flex flex-row gap-4 justify-evenly py-12">
                      <div className="w-11/12 md:w-1/2 join join-vertical ">
                        {faqData.map(({ q, a }) => (
                            <div key={q}>
                              <div className="collapse collapse-arrow join-item border border-base-300">
                                <input type="radio" name="my-accordion-4"  /> 
                                <div className="collapse-title text-xl font-medium text-start">
                                  {q}
                                </div>
                                <div className="collapse-content"> 
                                  <p>{a}</p>
                                </div>
                              </div>
                            </div>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </Transition>
      </section>
    );
}

export default FAQ;