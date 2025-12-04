"use client"
import "../../globals.css";
import './ProductListGrid.css';
import { ArticleProps } from "@/app/data/types";
import { useState, useMemo } from "react";
import Image from "next/image";
import { FilterCat } from "./FilterCategory";
import PriceFilter, {PriceRange} from "./PriceFilterRange";

interface ProductListProps {
  headline: string;
  component: React.ComponentType<ArticleProps>;
  articles: ArticleProps[];
  uniquecategories:string[];
}


export  function ProductListClient({
  headline,
  component,
  articles,
  uniquecategories
}: Readonly<ProductListProps>) {
  const [visibleCount,setVisibleCount] = useState(3)

  const [PriceFilters, setPriceFilters] = useState<PriceRange[]>([]);
  const [open, setOpen]=useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All products");
  //After passing through child function, pricefilters now stores all selected price ranges objects
  const showMore =() => {
    setVisibleCount(prev => prev+3);
  };
  const Component = component;

  const filteredArticles = useMemo(()=>{
    if (PriceFilters.length === 0) return articles;
    return articles.filter((a)=> PriceFilters.some( //some checks if there is atleast 1 element matching
        (range) => (a.price*((100-a.percentagediscount)/100)) >= range.min && (a.price*((100-a.percentagediscount)/100)) <= range.max
    ))                //price after discount
  },[articles,PriceFilters]);

  return (
    <section className="w-full flex flex-col md:flex-row">
  <div className="hidden md:block lg:w-[15%] md:w-[20%] ml-[8%] mr-[4%]">
    {/* Full filtering div */} {/* Hidden on smaller devices */}

    <div>
      {/* Filter by category */}
      <div className="flex mb-[9%] gap-1">
        <div className="relative w-[9%] h-[auto] mb-[3%] lg:w-[11%] md:w-[14%]">
          <Image
            src="/filter05.svg"
            alt="Filter Icon"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <h4 className="xl:text-[150%]  md:text-[140%] font-semibold  font-sans mb-[4%]"> Filter</h4>
      </div>

      <h4 className="lg:mb-[6%] font-semibold text-[120%] font-sans      md:mb-[3%]">CATEGORIES</h4>
      <FilterCat categories={uniquecategories} onSelect={(value) => setSelectedCategory(value)} />
    </div>

    {/* a change in price filter will trigger this */}
    <PriceFilter onChange={setPriceFilters} />
  </div>
  <div className="md:hidden flex ml-[8%] mr-[8%] border-y border-gray-300 py-2" > {/* Shown in only smaller devices, a dropdown filtering */}
    <div onClick={()=> setOpen(!open)} className="flex">
    <div className="relative w-[20px] h-[20px] mt-[5px]">
      <Image
        src="/filter05.svg"
        alt="Filter Icon"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
    <h4 className="text-[20px] font-semibold  font-sans ml-1 "> Filter</h4>
    </div>
  </div>
  {open &&(
    <div className="absolute z-10 bg-white/95 shadow-xl border rounded-lg mt-[50px] sm:w-[35%] p-2 w-[48%] ml-[8%] md:hidden">
    {/* For smaller devices */}

    <div>
      {/* Filter by category */}
      <div className="flex items-center justify-between">
        <h4 className=" font-semibold text-[120%] font-sans">CATEGORIES</h4>
        <h4 onClick={()=> setOpen(!open)} className="font-medium text-[120%] mt-[5px]">X</h4>
      </div>
      <FilterCat categories={uniquecategories} onSelect={(value) => setSelectedCategory(value)}/>
    </div>

    {/* a change in price filter will trigger this */}
    <PriceFilter onChange={setPriceFilters} />
  </div>
  )}

  <div className="lg:w-[66%] md:w-[61%] mx-[8%] md:mx-0 ">
    <h2 className="xl:text-[150%]  md:text-[140%] sm:text-[130%] text-[1.1rem] font-semibold  font-sans md:mb-[4%] my-[2%] md:my-0">{selectedCategory}</h2>

    <div className="products_grid">
      {filteredArticles.slice(0, visibleCount).map((article) => (
        <Component key={article.documentId} {...article} />
      ))}
    </div>

    {visibleCount < articles.length && (
      <button onClick={showMore}>Show more</button>
    )}
  </div>
</section>)
}