import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewStars = ({rating}) => {
    let reviewStars = [];

    for (let i=0; i < Math.floor(rating); i++) {
        reviewStars.push(
            <FaStar key={i} className="text-warning" />
        )
    }
    if(rating - Math.floor(rating) != 0) {
        reviewStars.push(
            <FaStarHalfAlt key={rating++} className="text-warning" />
        )
    }

    return (
        <div className="flex flex-row gap-2">
            {reviewStars}
        </div>
    );
}

export default ReviewStars;