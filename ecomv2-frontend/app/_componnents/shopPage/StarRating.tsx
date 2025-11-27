import { FaStar, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
    rating: number;
}

export default function StarRating({rating}:StarRatingProps){
    return(
        <div className="flex flex-row">
            {Array.from({length:5},(_,i)=> //we dont need the value, we need just the index
             i<Math.round(rating)? <FaStar key={i}/> : <FaRegStar key={i}/>
            )}
        </div>
    )
}