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

export interface ProductCategoryProps{
    id: number;
  documentId: string;
  name: string;
  image: ImageProps;
  slug: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleProps {
  id: number;
  documentId: string;
  title: string;
  ProductId: string;
  description: string;
  images: ImageProps[];
  price: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  PercentageDiscount: number;
  product_category: ProductCategoryProps[];
  Is_new: boolean;
}

export interface CategoryProps {
  id: number;
  documentId: string;
  name: string;
  image: ImageProps;
  slug: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}