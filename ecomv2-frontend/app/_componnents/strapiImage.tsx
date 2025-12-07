
import Image from "next/image";
import "./StrapiImage.css";
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
    if(!imageUrl) return null;

    return <div className="rounded-[20px] overflow-hidden w-full h-full">
            <Image src={imageUrl} alt={alt} {...rest} />
            </div>
}
export function getStrapiMedia(url:string | null){
    if(url == null) return null;
    if(url.startsWith("data:")) return url;
    if(url.startsWith("http") || url.startsWith("//")) return url;
    return GetStrapiURL().slice(0, GetStrapiURL().length - 1) + url;
}