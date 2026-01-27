import { createClient } from 'microcms-ts-sdk';

// Initialize Client SDK.
export const client = createClient<Endpoints>({
  serviceDomain: "begradjp",
  apiKey: process.env.REACT_APP_MICROCMS_API_KEY || '',
});

export type Image = {
  url: string;
  height: number;
  width: number;
};
export type Links = {
  link:string;
}

export type Product = {
  id: string;
  title: string;
  description: string;
  descriptionDetail?: string;
  productImage?: Image;
};

export type Member = {
  memberId: string;
  name: string;
  description?: string;
  descriptionDetail?: string;
  icon?: Image;
  links?: Links[];
  youtubeList?: YouTubeData[];
  role?: string;
}

export type Company = {
  nameEn: string;
  nameJa: string;
  about: string;
  mission: string;
  supportTitle: string;
  supportDescription: string;
  postcode: string;
  address: string;
  tel: string;
  businessHours: string;
  email: string;
}

type Content = {
  text: string;
};

type YouTubeData = {
  title: string;
  link: string;
}

interface Endpoints {
  // API in list format.
  list: {
    products: Product;
    members: Member;
    company: Company;
  };
  // API in object format
  object: {
    content: Content;
  };
}

export const getMembers = async (): Promise<Member[]> => {
  const members = await client.getList({ endpoint: 'members'});
  return members.contents;
}

export const getCompany = async (): Promise<Company> => {
  const company = await client.getList({ endpoint: 'company'});
  return company.contents[0];
}

export const getProducts = async (): Promise<Product[]> => {
  const products = await client.getList({ endpoint: 'products' });
  return products.contents;
}

