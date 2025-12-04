export interface LinkProps{
    id: number;
    text: string;
    cta: string;
    isExternal: boolean;
}

export interface ImageProps{
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
}

export interface LogoProps{
    title: string;
    image: ImageProps[];
}

export interface ArticleProps {
  id: number;
  documentId: string;
  name: string;
  shortDescription: string;
  images: ImageProps[];
  price: number;
  rating: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  percentagediscount: number;
  Is_new:boolean;
  category:string;
}