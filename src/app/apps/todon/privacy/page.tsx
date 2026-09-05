import type { Metadata } from 'next';

import TodoNPrivacy from '@/components/TodoNPrivacy';

export const metadata: Metadata = {
  title: 'TodoN（トドン）プライバシーポリシー',
};

const TodoNPrivacyPage: React.FC = () => <TodoNPrivacy />;

export default TodoNPrivacyPage;
