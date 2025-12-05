"use client";

import { useState } from "react";
import Image from "next/image";

export type SortOption = "lowest" | "highest" | "az" | "za" |"none";

export default function SortBy({ onChange }: { onChange: (o: SortOption) => void }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>("none");

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Sort label clickable */}
      <div
        className="flex items-center gap-1 cursor-pointer select-none my-[2%]"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium font-sans md:text-[22px] text-[18px]">Sort by</span>
        <Image
          src="/Vector.svg"
          alt="Open"
          width={16}
          height={16}
          className={`transition-transform duration-200 w-[15px] h-[15px] md:w-[20px] md:h-[20px] ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 right-0 bg-white shadow-lg border rounded-md w-32 z-20 overflow-hidden">
          <button
            onClick={() => handleSelect("lowest")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            Lowest price
          </button>
          <button
            onClick={() => handleSelect("highest")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            Highest price
          </button>
          <button
            onClick={() => handleSelect("az")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            A - Z
          </button>
          <button
            onClick={() => handleSelect("za")}
            className="block w-full text-left px-3 py-2 hover:bg-gray-100"
           >
            Z - A
          </button>
        </div>
      )}
    </div>
  );
}
