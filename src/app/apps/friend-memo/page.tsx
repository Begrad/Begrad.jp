import type { Metadata } from 'next';

import TomoMemoLp from '@/components/TomoMemoLp';
import { getCompany } from '@/microCMS/apiClient';

export const metadata: Metadata = {
  title: 'ともメモ（Friend Memo）サポート',
  description:
    'ともメモ（Friend Memo）に関するお問い合わせ・サポート情報、利用規約・プライバシーポリシーはこちらをご覧ください。',
};

const FriendMemoPage = async (): Promise<React.JSX.Element> => {
  const company = await getCompany();

  return (
    <TomoMemoLp
      email={company.email}
      tel={company.tel}
      address={company.address}
      postcode={company.postcode}
      businessHours={company.businessHours}
    />
  );
};

export default FriendMemoPage;
