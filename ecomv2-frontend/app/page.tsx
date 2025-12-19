
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";
import { getContent, getNewArticles } from "./data/loaders";
import ProductScrollable from "./_componnents/ProductCardScrollable/productScrollable";
import { BundleTest } from "./_componnents/bundle/bundleTest";
import { fetchAPI } from "./utils/fetch-api";
import { About } from "./_componnents/about/about";
import { Aboutone } from "./_componnents/about1/about1";
import ExpandingSearchBar from "./_componnents/expanding/ExpandingSearchBar";
import { GetStrapiURL } from "./utils/get-strapi-url";

export default async function Home() {
 
  const {data} =  await getContent('api/products')
  console.log(data[0].images);
  
  return(
    <>
    <HeroSection/>
    <BundleTest/>
    <ProductScrollable articles={data}/>
    <Service/>
    <Aboutone/>
    </>
  )
}