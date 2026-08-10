import 'server-only';

import { createClient } from 'microcms-ts-sdk';
import { cache } from 'react';

const client = createClient<Endpoints>({
  serviceDomain: 'begradjp',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

const REVALIDATE_SECONDS = 3600;

export type Image = {
  url: string;
  height: number;
  width: number;
};
export type Links = {
  link: string;
};

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
};

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
};

type Content = {
  text: string;
};

type YouTubeData = {
  title: string;
  link: string;
};

interface Endpoints {
  list: {
    products: Product;
    members: Member;
    company: Company;
  };
  object: {
    content: Content;
  };
}

export const getCompany = cache(async (): Promise<Company> => {
  const company = await client.getList({
    endpoint: 'company',
    customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
  });
  return company.contents[0];
});

export const getMembers = cache(async (): Promise<Member[]> => {
  const members = await client.getList({
    endpoint: 'members',
    customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
  });
  return members.contents;
});

export const getMemberById = cache(async (memberId: string): Promise<Member | null> => {
  const members = await getMembers();
  return members.find((m) => m.memberId === memberId) ?? null;
});

export const getProducts = cache(async (): Promise<Product[]> => {
  const products = await client.getList({
    endpoint: 'products',
    customRequestInit: { next: { revalidate: REVALIDATE_SECONDS } },
  });
  return products.contents;
});
