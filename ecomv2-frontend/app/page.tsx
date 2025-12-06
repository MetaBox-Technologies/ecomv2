import Image from "next/image";
import Link from "next/link";
import { Service } from "./_componnents/services/services";
import HeroSection from "./_componnents/HeroSection/customs/herosection";
import { getNewArticles } from "./data/loaders";
import { Card } from "./_componnents/shopPage/Card";
import { ProductCardScrollable } from "./_componnents/ProductCardScrollable/productCardScrollable";
import App from "./_componnents/ProductCardScrollable/test";


export default function Home() {
 
  
  return(
    <>
    <HeroSection/>
    <ProductCardScrollable/>
    <Service/>
    </>
  )
}