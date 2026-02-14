export interface IServiceItem {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  propertyUrl: string;
}

export interface IServiceCategory {
  title: string;
  description: string;
  imageUrl: string;
  propertyUrl: string;
  items: IServiceItem[];
}

export interface IPageData {
  services: IServiceCategory[];
}

// Полная типизация Service.md
export interface IPageDataProps {
    title: string;
    description: string;
    seo: ISeoProps;
    services: IServiceCategory[];
}

export interface ISeoProps {
    title: string;
    description: string;
    ogImage: string;
}