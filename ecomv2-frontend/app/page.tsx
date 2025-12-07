
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";
import { getNewArticles } from "./data/loaders";
import ProductScrollable from "./_componnents/ProductCardScrollable/productScrollable";


export default async function Home() {
 
  const newArrivals =  await getNewArticles().then(response => response.data);
  
  return(
    <>
    <HeroSection/>
    <ProductScrollable articles={newArrivals}/>
    <Service/>
    </>
  )
}