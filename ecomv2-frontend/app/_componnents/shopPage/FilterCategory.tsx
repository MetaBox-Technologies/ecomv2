"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, startTransition } from "react";

interface CategoriesListProps {
  categories: string[];
  selected:string;
  isOnMobile?: boolean;
}

export function FilterCat( {categories, selected, isOnMobile = false} : Readonly<CategoriesListProps>) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [isLoading, SetIsLoading] =useState(false)
  useEffect(()=>{SetIsLoading(false);},[selected])

  const updateCategory = (category?: string) => {
    SetIsLoading(true);
    const params = new URLSearchParams(searchParams);

    if (category && category !== "All Rooms") {
      params.set("query", category);
    } else {
      params.delete("query");
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className={`flex  ${isOnMobile? "flex-wrap gap-3" : "flex-col items-start lg:gap-3 md:gap-1" }`}>
        <button key="all" disabled={isLoading} className={`cursor-pointer ${isOnMobile? `transition-all duration-400 ease-in-out font-semibold rounded-full px-[10px] py-[6px] ${isLoading ? "opacity-50" : ""} ${selected==="All Rooms"? "text-gray-300 bg-black": "bg-gray-300"}` : `transition-all duration-400 ease-in-out font-semibold font-poppins ${selected==="All Rooms"? "text-black underline": "text-gray-500"}` }`}
          onClick={() => {updateCategory()}
          }
        >
          {isLoading && selected === "All Rooms" ? "Loading…" : "All Rooms"}
        </button>
        {categories.map((category) => (
            <button 
                key={category}
                disabled={isLoading}
                onClick={() => {updateCategory(category);}
                }
                className={`cursor-pointer ${isOnMobile? `transition-all duration-400 ease-in-out font-semibold font-poppins rounded-full px-[8px] py-[4px] ${isLoading ? "opacity-50" : ""} ${selected===category? "text-gray-300 bg-black": "bg-gray-300"}` : `transition-all duration-400 ease-in-out font-semibold font-poppins ${selected===category? "text-black underline": "text-gray-500"}` }`}
            >
            {isLoading && selected === category ? "Loading…" : category}
            </button>
        ))}
    </div>
  );
}