import { createClient,MicroCMSSchemaInfer } from 'microcms-ts-sdk';

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

export type Member = {
  memberId: number;
  name: string;
  description?: string;
  icon?: Image;
  link?: string;
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

interface Endpoints {
  // API in list format.
  list: {
    members: Member;
    company: Company;
  };
  // API in object format
  object: {
    content: Content;
  };
}

type Schema = MicroCMSSchemaInfer<typeof client>;


export const getMembers = async (): Promise<Member[]> => {
  const members = await client.getList({ endpoint: 'members'});
  return members.contents;
}

export const getCompany = async (): Promise<Company> => {
  const company = await client.getList({ endpoint: 'company'});
  return company.contents[0];
}