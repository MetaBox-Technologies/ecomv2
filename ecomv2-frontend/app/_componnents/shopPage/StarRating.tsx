import { FaStar, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
    rating: number;
    color?: string
}

export default function StarRating({rating, color}:StarRatingProps){
    return(
        <div className="flex flex-row" style={{color:`${color ? `${color}` : ''}`}}>
            {Array.from({length:5},(_,i)=> //we dont need the value, we need just the index
             i<Math.round(rating)? <FaStar key={i}/> : <FaRegStar key={i}/>
            )}
        </div>
    )
}