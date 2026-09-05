import type { Metadata } from 'next';

import TodoNLp from '@/components/TodoNLp';
import { getCompany } from '@/microCMS/apiClient';

export const metadata: Metadata = {
  title: 'TodoN（トドン）サポート',
  description:
    'タスク管理アプリ TodoN（トドン）に関するお問い合わせ・サポート情報、利用規約・プライバシーポリシーはこちらをご覧ください。',
};

const TodoNPage = async (): Promise<React.JSX.Element> => {
  const company = await getCompany();

  return (
    <TodoNLp
      email={company.email}
      tel={company.tel}
      address={company.address}
      postcode={company.postcode}
      businessHours={company.businessHours}
    />
  );
};

export default TodoNPage;
