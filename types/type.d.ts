export type TCategory = "earphones" | "headphones" | "speakers";

export type TResponsiveImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type TGallery = {
  first: TResponsiveImage;
  second: TResponsiveImage;
  third: TResponsiveImage;
};

export type TIncludeItem = {
  quantity: number;
  item: string;
};

export type TOtherProduct = {
  slug: string;
  name: string;
  image: TResponsiveImage;
};

export type TProduct = {
  id: number;
  slug: string;
  name: string;
  image: TResponsiveImage;
  category: TCategory;
  categoryImage: TResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: TIncludeItem[];
  gallery: TGallery;
  others: TOtherProduct[];
};

export type TProductsData = TProduct[];
