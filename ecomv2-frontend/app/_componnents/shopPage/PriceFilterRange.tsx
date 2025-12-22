"use client";

import { useState, useEffect } from "react";

export type PriceRange = {
  label: string;
  min: number;
  max: number;
};

const priceRanges: PriceRange[] = [
  { label: "All prices", min: 0,max: Infinity},
  { label: "$0.00 - 99.99", min: 0, max: 99.99 },
  { label: "$100.00 - 199.99", min: 100, max: 199.99 },
  { label: "$200.00 - 299.99", min: 200, max: 299.99 },
  { label: "$300.00 - 399.99", min: 300, max: 399.99 },
  { label: "$400.00+", min: 400, max: Infinity }
];

interface Props {
  onChange: (ranges: PriceRange[]) => void;
  selectedPrice: PriceRange[];
  isOnMobile?: boolean;
}

export default function PriceFilter({ onChange,selectedPrice, isOnMobile=false }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (index: number) => {
    setSelected((prev) => //prev is the previous state of selected ranges, automatically available
      prev.includes(index)
        ? prev.filter((i) => i !== index) //if does have the index in the ranges, remove it else add
        : [...prev, index]
    ); //selected stores selected indexes
  };

  useEffect(() => { //useEffect means whenever the second parameter passed changes, the function will execute
    onChange(selected.map((i) => priceRanges[i]));
  }, [selected]); //takes the index, converts it to PriceRange object pass to onchange
 //onChange is a prop from parent, it will send back to productlist the selected price ranges
  return (
    <div>
      <h4 className={`font-semibold text-[110%] font-poppins  ${isOnMobile? "mt-[5%] mb-[2%] ml-[2%] underline" : "mt-[13%] mb-[6%]" }`}>PRICE</h4>
      <div className={`flex flex-col items-start lg:gap-3 md:gap-1 w-full ${isOnMobile?"ml-[1%] gap-2":""}`}>
      {priceRanges.map((range, index) => (
        <label
          key={index} className={`text-gray-500 w-full flex font-poppins font-semibold  ${isOnMobile? "flex-row-reverse justify-end gap-[2%]" : "items-center justify-between" }`}
        >
          {range.label}
          <input
            type="checkbox"
            checked={selected.includes(index)}
            onChange={() => toggle(index)}
            className={`
                w-4 h-4 border border-gray-400 transition-all duration-500 cursor-pointer
               ${isOnMobile ? "rounded-full mt-[5px]" : " rounded-2xl"} 
               ${selected.includes(index)? "accent-black text-white bg-black" : "bg-white"}
            `}

          />
        </label>
      ))}
      </div>
    </div>
  );
}