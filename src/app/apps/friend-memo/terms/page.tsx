import type { Metadata } from 'next';

import TomoMemoTerms from '@/components/TomoMemoTerms';

export const metadata: Metadata = {
  title: 'ともメモ 利用規約',
};

const FriendMemoTermsPage: React.FC = () => <TomoMemoTerms />;

export default FriendMemoTermsPage;
