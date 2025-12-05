import Breadcrumbs from "@/app/_componnents/global/BreadCrumbs";
import StarRating from "@/app/_componnents/shopPage/StarRating";
import ReviewForm from "@/app/_componnents/global/StarRatingForm";
import { getShopPage } from "../data/loaders";
import { StrapiImage } from "../_componnents/strapiImage";
import { ProductList } from "../_componnents/shopPage/ProductList";
import { Card } from "../_componnents/shopPage/Card";
import { getCategories} from "../utils/getCategories"

interface PageProps {
  searchParams: Promise<{ query?: string; }>;
}

async function loader() {
  const data = await getShopPage();
  console.log(data);
  if(!data) throw new Error("Failed to fetch global settings");
  return {hero: data?.heroBanner};
}

export default async function ShopPage({searchParams}:PageProps) {
  const {query} = await searchParams;
  const uniquecategories = await getCategories();
  const {hero} = await loader();
  return <div>
              <div className=" w-full  flex justify-center mt-[2%] mb-[2%]">
                    <div className="relative w-17/20 h-[300px] rounded-[20px] overflow-hidden   xl:h-[400px]">
                        <div className="absolute z-10 w-9/10 top-[70px] left-1/2 -translate-x-1/2 text-center flex flex-col gap-5   xl:gap-7 xl:top-[100px] md:top-[75px]">
                            <div className="text-[20px]"><Breadcrumbs/></div>
                            <h2 className="font-sans font-semibold text-4xl xl:text-6xl md:text-5xl">{hero.title}</h2>
                            <h4 className="text-[18px] text-gray-600    xl:text-[22px] md:text-[20px]">{hero.subtitle}</h4>
                        </div>
                        <StrapiImage
                            src={hero.backgroundImage.url}
                            alt={hero.backgroundImage.alternativeText || "No alternative text provided"}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <ProductList
                  headline="Featured Articles"
                  component={Card}
                  query={query}
                  uniquecategories ={uniquecategories}
                />
         </div>;
}