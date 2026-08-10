import Link from 'next/link';

const NotFound: React.FC = () => (
  <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
    <h1>ページが見つかりません</h1>
    <p>お探しのページは存在しないか、移動した可能性があります。</p>
    <Link href="/">トップページへ戻る</Link>
  </div>
);

export default NotFound;
