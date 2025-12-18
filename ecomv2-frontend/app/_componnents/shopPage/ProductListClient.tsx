"use client"
import "../../globals.css";
import './ProductListGrid.css';
import { useState, useMemo } from "react";
import Image from "next/image";
import { FilterCat } from "./FilterCategory";
import PriceFilter, {PriceRange} from "./PriceFilterRange";
import SortBy, { SortOption } from "./SortBy";
interface ArticleProps {
  id: number;
  documentId: string;
  name: string;
  shortDescription: string;
  images: {
    url:string,
    alternativeText:string,
  },
  price: number;
  rating: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}
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
  const showLess =() => {
    setVisibleCount(3);
  }
  const Component = component;
  const [sortOption, setSortOption] = useState<SortOption>("none");

const filteredArticles = useMemo(() => {
  let result = [...articles];

  // Apply price filter
  if (PriceFilters.length > 0) {
    result = result.filter((a) =>
      PriceFilters.some((range) => {
        const finalPrice = a.price * ((100 - a.PercentageDiscount) / 100);
        return finalPrice >= range.min && finalPrice <= range.max;
      })
    );
  }

  // Apply sorting
  if (sortOption === "lowest") {
    result.sort((a, b) => 
      (a.price * ((100 - a.PercentageDiscount) / 100)) -
      (b.price * ((100 - b.PercentageDiscount) / 100))
    );
  } else if (sortOption === "highest") {
    result.sort((a, b) => 
      (b.price * ((100 - b.PercentageDiscount) / 100)) -
      (a.price * ((100 - a.PercentageDiscount) / 100))
    );
  } else if (sortOption === "az") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "za"){
    result.sort((a, b)=> b.title.localeCompare(a.title));
  }

  return result;
}, [articles, PriceFilters, sortOption]);

  return (
    <section className="w-full flex flex-col md:flex-row mb-[10%]">
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
    <div className="flex justify-between">
        <h2 className="xl:text-[150%]  md:text-[140%] sm:text-[130%] text-[1.1rem] font-semibold  font-sans md:mb-[4%] my-[2%] md:my-0">{selectedCategory}</h2>
        <div className="flex justify-end mr-[8%] md:mr-0 my-[2%] md:my-0">
        <SortBy onChange={setSortOption} />
        </div>
    </div>
    <div className="products_grid">
      {filteredArticles.slice(0, visibleCount).map((article) => (
        <Component key={article.documentId} {...article} images={{url:article.images[0].url, alternativeText: article.images[0].alternativeText}} />
      ))}
    </div>

    {visibleCount < filteredArticles.length && (
      <button className="block mx-auto mt-[3%] sm:text-base  sm:px-10 sm:py-[6px] text-sm px-7 py-[4px] border border-[#141718] rounded-full text-[#141718] cursor-pointer transition-colors duration-300 hover:bg-[#141718] hover:text-white" onClick={showMore}>Show more</button>
    )}
    {visibleCount >= filteredArticles.length && filteredArticles.length>3 && (
      <button className="block mx-auto mt-[3%] sm:text-base  sm:px-10 sm:py-[6px] text-sm px-7 py-[4px] border border-[#141718] rounded-full text-[#141718] cursor-pointer transition-colors duration-300 hover:bg-[#141718] hover:text-white" onClick={showLess}>Show less</button>
    )}

    {filteredArticles.length == 0 && ( <h5 className="text-gray-600">No available products at the moment.</h5>)}
  </div>
</section>)
}