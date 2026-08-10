import type { Metadata } from 'next';

import TomoMemoLp from '@/components/TomoMemoLp';

export const metadata: Metadata = {
  title: 'ともメモ（Friend Memo）',
  description:
    '友だち・知人の情報を、あなたらしい項目で整理できるモバイルアプリ「ともメモ」の紹介ページです。',
};

const FriendMemoPage: React.FC = () => <TomoMemoLp />;

export default FriendMemoPage;
