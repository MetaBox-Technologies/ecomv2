
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";
import { getNewArticles } from "./data/loaders";
import ProductScrollable from "./_componnents/ProductCardScrollable/productScrollable";
import { BundleTest } from "./_componnents/bundle/bundleTest";
import { fetchAPI } from "./utils/fetch-api";


export default async function Home() {
 
<<<<<<< Updated upstream
  /*const newArrivals =  await getNewArticles().then(response => response.data);*/
=======
  const newArrivalsDummy =  await fetchAPI("http://localhost:3000/dummyData.json", {method : "GET"});
>>>>>>> Stashed changes
  
  return(
    <>
    <HeroSection/>
    <BundleTest/>
    <ProductScrollable articles={newArrivalsDummy}/>
    <Service/>
    </>
  )
}