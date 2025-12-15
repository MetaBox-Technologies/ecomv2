
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";
import { getNewArticles } from "./data/loaders";
import ProductScrollable from "./_componnents/ProductCardScrollable/productScrollable";
import { BundleTest } from "./_componnents/bundle/bundleTest";
import { fetchAPI } from "./utils/fetch-api";
import { About } from "./_componnents/about/about";
import { Aboutone } from "./_componnents/about1/about1";
import ExpandingSearchBar from "./_componnents/expanding/ExpandingSearchBar";


export default async function Home() {
 
  const newArrivalsDummy =  await fetchAPI("http://localhost:3000/dummyData.json", {method : "GET"});
  
  return(
    <>
    <HeroSection/>
    <BundleTest/>
    <ProductScrollable articles={newArrivalsDummy}/>
    <Service/>
    <Aboutone/>
    </>
  )
}