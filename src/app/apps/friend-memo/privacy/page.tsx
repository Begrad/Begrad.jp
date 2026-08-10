import type { Metadata } from 'next';

import TomoMemoPrivacy from '@/components/TomoMemoPrivacy';

export const metadata: Metadata = {
  title: 'ともメモ プライバシーポリシー',
};

const FriendMemoPrivacyPage: React.FC = () => <TomoMemoPrivacy />;

export default FriendMemoPrivacyPage;
