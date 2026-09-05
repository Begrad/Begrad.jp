import type { Metadata } from 'next';

import TodoNTerms from '@/components/TodoNTerms';

export const metadata: Metadata = {
  title: 'TodoN（トドン）利用規約',
};

const TodoNTermsPage: React.FC = () => <TodoNTerms />;

export default TodoNTermsPage;
