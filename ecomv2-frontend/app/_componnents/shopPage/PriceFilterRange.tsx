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
}

export default function PriceFilter({ onChange }: Props) {
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
      <h4 className="mt-[13%] font-semibold mb-[6%] text-[120%] font-sans">PRICE</h4>
      <div className="flex flex-col items-start lg:gap-3 md:gap-1 w-full">
      {priceRanges.map((range, index) => (
        <label
          key={index} className="text-gray-500 w-full flex items-center justify-between font-sans font-semibold"
        >
          {range.label}
          <input
            type="checkbox"
            checked={selected.includes(index)}
            onChange={() => toggle(index)}
            className={
                        selected.includes(index)
                          ? "w-5 h-5 border border-gray-400 rounded-2xl accent-black text-white transition-all duration-500"
                          : "w-5 h-5 border border-gray-400 rounded-2xl bg-white transition-all duration-500"
                      }
          />
        </label>
      ))}
      </div>
    </div>
  );
}