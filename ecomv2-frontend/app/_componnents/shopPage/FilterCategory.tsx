"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

interface CategoriesListProps {
  categories: string[];
  onSelect: (value: string) => void;
}

export function FilterCat( {categories, onSelect} : Readonly<CategoriesListProps>) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleCategoryClick =(category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("query", category);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
    onSelect(category); 
  };
 
  const handleAllClick=()=>{
    const params = new URLSearchParams(searchParams);
    params.delete("query");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    onSelect("All products");
  }

  const [active, setActive] = useState("All products")
  return (
    <div className="flex flex-col items-start lg:gap-3 md:gap-1">
        <button key="all" className={`transition-all duration-400 ease-in-out font-semibold font-sans ${active==="All products"? "text-black underline": "text-gray-500"}`}
          onClick={() => {handleAllClick()
                         setActive("All products")}
          }
        >
          All products
        </button>
        {categories.map((category) => (
            <button 
                key={category}
                onClick={() => {handleCategoryClick(category);
                                setActive(category)}
                }
                className={`transition-all duration-400 ease-in-out font-semibold font-sans ${active===category? "text-black underline": "text-gray-500"}`}
            >
            {category}
            </button>
        ))}
    </div>
  );
}