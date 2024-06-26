import { reviewsData } from "../data/reviewsData";
import Transition from "../utils/Transition";
import ReviewStars from "./ReviewStars";

const Reviews = () => {
  return (
    <section id="reviews" className="container m-auto">
      <Transition>
        <div className="carousel carousel-center max-w-full p-4 space-x-4  rounded-box">
          {reviewsData.map(({ rating, comment, name }) => (
            <div key={name} className="carousel-item">
              <div className="card bg-accent w-64 h-64 md:w-96 md:h-auto">
                <div className="card-body">
                  <div className="card-title">
                    <ReviewStars {...{rating}} />
                  </div>
                  <p className="text-secondary line-clamp-6 overflow-scroll text-sm md:text-base">{comment}</p>
                  <div className="card-actions">
                    <p className="text-sm italic">{name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      </Transition>
      
    </section>
  );
}

export default Reviews;