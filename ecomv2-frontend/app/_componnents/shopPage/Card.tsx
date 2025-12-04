"use client";
import{useState} from "react";
import { ImageProps} from "../../data/types"
import Link from "next/link";
import { StrapiImage } from "../strapiImage";
import StarRating from "./StarRating";

export interface CardProps {
  documentId: string;
  name: string;
  shortDescription: string;
  images: ImageProps[];
  price: number;
  rating: number;
  createdAt: string;
  percentagediscount: number;
  Is_new:boolean;
  category: string;
}

export function Card({
  name,
  shortDescription,
  images,
  price,
  rating,
  createdAt,
  percentagediscount,
  Is_new,
  category,
}: Readonly<CardProps>) {
  const [showActions, setShowActions] = useState(false);
  return (
    <div onMouseEnter={()=>setShowActions(true)}
         onMouseLeave={()=>setShowActions(false)}
         onClick={()=>setShowActions(!showActions)}
         >
      <div className="relative w-[100%]">
        {Is_new && <div className="lg:w-[60px] lg:h-[30px] md:w-[52px] md:h-[25px] w-[45px] h-[20px] absolute top-[5%] left-[5%] bg-white rounded"><h1 className="font-semibold md:text-base lg:text-lg test-sm text-center">NEW</h1></div>}
        {percentagediscount>0 && (<div className={`lg:w-[60px] lg:h-[30px] md:w-[52px] md:h-[25px] w-[45px] h-[20px]  absolute ${Is_new? "top-[2.4rem] sm:top-[16%] md:top-[16%] lg:top-[17%] xl:top-[15%]" : "top-[5%]"} left-[5%] bg-[#38CB89] rounded`}><h1 className="font-semibold text-white md:text-base lg:text-lg text-sm text-center">-{percentagediscount}%</h1></div>)}
       

        <StrapiImage
          src={images[0].url}
          alt={images[0].alternativeText || "No alternative text provided"}
          width={400}
          height={400}
        />
        {showActions && <div className="w-[90%] left-1/2 -translate-x-1/2 md:px-[24px] md:py-[8px] px-[16px] py-[4px] absolute bottom bottom-[5%] bg-black rounded-lg "><h4 className="md:text-xl text-[15px] text-white text-center">Add to Cart</h4></div>}
      </div>
      <div>
        <StarRating rating={3.7}/>
        <h5 className="font-semibold mt-[2%] sm:text-base text-sm">{name}</h5>
        <h5>{percentagediscount>0 && <div className="flex gap-2">
                                        <p className="font-semibold sm:text-base text-sm">${ (price * ((100 - percentagediscount) / 100)).toFixed(2) }</p>
                                        <p className="line-through text-gray-600 sm:text-base text-sm"> ${price}</p>
                                     </div>}
        </h5> 
        <h5>{percentagediscount==0 && <p className="font-semibold sm:text-base text-sm">${price}</p>}</h5>
      </div>
    </div>
  );
}