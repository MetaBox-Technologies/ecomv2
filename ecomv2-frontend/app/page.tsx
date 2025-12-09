
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";
import { getNewArticles } from "./data/loaders";
import ProductScrollable from "./_componnents/ProductCardScrollable/productScrollable";
import { Bundle } from "./_componnents/bundle/bundle";


export default async function Home() {
 
  const newArrivals =  await getNewArticles().then(response => response.data);
  
  return(
    <>
    <HeroSection/>
    <Bundle/>
    <Service/>
    </>
  )
}