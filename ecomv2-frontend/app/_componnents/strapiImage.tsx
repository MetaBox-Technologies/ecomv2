import Image from "next/image";
import { GetStrapiURL } from "../utils/get-strapi-url";

interface StrapiImageProps{
    src:string;
    alt:string;
    className?: string;        //explicitly allow className
    fill?: boolean;           
    [key: string]: any;  
}

export function StrapiImage({src,alt,...rest}:Readonly<StrapiImageProps>){
    const imageUrl= getStrapiMedia(src);
    console.log("ImageURL: ",imageUrl)
    if(!imageUrl) return null;

    return <Image src={imageUrl} alt={alt} {...rest}/>
}
export function getStrapiMedia(url:string | null){
    if(url == null) return null;
    if(url.startsWith("data:")) return url;
    if(url.startsWith("http") || url.startsWith("//")) return url;
    return GetStrapiURL() + url;
}