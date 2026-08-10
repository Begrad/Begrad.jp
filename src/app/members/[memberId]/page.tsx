import type { Metadata } from 'next';

import MemberDetail from '@/components/MemberDetail';
import { getMemberById } from '@/microCMS/apiClient';

type Props = {
  params: Promise<{ memberId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { memberId } = await params;
  const member = await getMemberById(memberId);
  return {
    title: member?.name ?? 'メンバー詳細',
  };
};

const MemberDetailPage = async ({ params }: Props): Promise<React.JSX.Element> => {
  const { memberId } = await params;
  return <MemberDetail memberId={memberId} />;
};

export default MemberDetailPage;
