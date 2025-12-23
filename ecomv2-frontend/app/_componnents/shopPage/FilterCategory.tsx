"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

interface CategoriesListProps {
  categories: string[];
  selected:string;
  isOnMobile?: boolean;
}

export function FilterCat( {categories, selected, isOnMobile = false} : Readonly<CategoriesListProps>) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const updateCategory = (category?: string) => {
    const params = new URLSearchParams(searchParams);

    if (category && category !== "All Rooms") {
      params.set("query", category);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const [active, setActive] = useState("All Rooms")
  return (
    <div className={`flex  ${isOnMobile? "flex-wrap gap-3" : "flex-col items-start lg:gap-3 md:gap-1" }`}>
        <button key="all" className={`cursor-pointer ${isOnMobile? `transition-all duration-400 ease-in-out font-semibold rounded-full px-[10px] py-[6px] ${selected==="All Rooms"? "text-gray-300 bg-black": "bg-gray-300"}` : `transition-all duration-400 ease-in-out font-semibold font-sans ${selected==="All Rooms"? "text-black underline": "text-gray-500"}` }`}
          onClick={() => {updateCategory()}
          }
        >
          All Rooms
        </button>
        {categories.map((category) => (
            <button 
                key={category}
                onClick={() => {updateCategory(category);}
                }
                className={`cursor-pointer ${isOnMobile? `transition-all duration-400 ease-in-out font-semibold font-sans rounded-full px-[8px] py-[4px] ${selected===category? "text-gray-300 bg-black": "bg-gray-300"}` : `transition-all duration-400 ease-in-out font-semibold font-sans ${selected===category? "text-black underline": "text-gray-500"}` }`}
            >
            {category}
            </button>
        ))}
    </div>
  );
}