import Link from 'next/link';
import type { CSSProperties } from 'react';

import tomoMemoLogo from '../assets/tomo-memo-logo.png';
import styles from '../css/TomoMemoPages.module.css';
import type { Company } from '../microCMS/apiClient';

const APP_STORE_URL = '#';
const GOOGLE_PLAY_URL = '#';

const tintColorLight = '#3498db';
const TAG_COLORS = [
  '#3498db', // blue
  '#2ecc71', // green
  '#e74c3c', // red
  '#f39c12', // orange
  '#9b59b6', // purple
  '#1abc9c', // turquoise
  '#34495e', // dark blue
  '#e67e22', // dark orange
];

interface TomoTintStyle extends CSSProperties {
  '--tomo-tint'?: string;
}

interface TomoAccentStyle extends CSSProperties {
  '--tomo-accent'?: string;
}

const featureItems: Array<{ title: string; description: string }> = [
  {
    title: '友だち情報の一元管理',
    description: '連絡先に加えて、覚えておきたいことをまとめて記録',
  },
  {
    title: 'タグで分類',
    description: 'グループや文脈で整理して一覧しやすく',
  },
  {
    title: 'カスタム項目',
    description: '自分用の項目を追加して柔軟に記録',
  },
  {
    title: 'ニックネーム',
    description: '複数ニックネームに対応し、表示はニックネーム優先',
  },
  {
    title: '次に連絡したい日',
    description: '連絡タイミングを忘れないためのメモ機能',
  },
  {
    title: 'アーカイブ',
    description: '使わなくなったが消したくない情報を退避',
  },
  {
    title: 'クラウド同期',
    description: 'アカウントで複数端末間のデータ同期（クラウド）',
  },
  {
    title: '無料で利用可能 + プレミアム',
    description: '無料枠あり、プレミアムで制限解除',
  },
];

const faqItems = [
  {
    q: '無料で使えますか？',
    a: '基本機能は無料でご利用いただけます。より多くの項目や高度な利用には、プレミアム機能（アプリ内課金）もご用意しています。',
  },
  {
    q: 'データはどのように保存されますか？',
    a: '端末上での利用に加え、アカウント利用時はクラウドサービスの同期により複数端末で同じデータを扱えます。',
  },
  {
    q: 'アカウントを削除した場合、データはどうなりますか？',
    a: '削除時の取り扱いについては、利用規約・プライバシーポリシーに記載しています。',
  },
  {
    q: 'オフラインでも使えますか？',
    a: '閲覧・編集の一部はオフラインでも利用できます。同期が必要な操作はオンライン時に反映されます。',
  },
];

type Props = Pick<Company, 'email' | 'tel' | 'address' | 'postcode' | 'businessHours'>;

const TomoMemoLp: React.FC<Props> = ({ email, tel, address, postcode, businessHours }) => {
  return (
    <main
      className={styles['tomo-page']}
      style={{ '--tomo-tint': tintColorLight } as TomoTintStyle}
    >
      <section className={styles['tomo-hero']}>
        <p className={styles['tomo-eyebrow']}>Begrad Mobile App</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tomoMemoLogo.src}
          alt="ともメモ アプリロゴ"
          className={styles['tomo-logo']}
          loading="lazy"
        />
        <h1>ともメモ（Friend Memo）</h1>
        <p className={styles['tomo-lead']}>
          友だち・知人の情報を、あなたらしい項目で整理できるモバイルアプリ。
          大切なつながりを、記憶任せにしないためのメモ帳です。
        </p>
        <div className={styles['tomo-links']}>
          <a
            href={APP_STORE_URL}
            aria-label="App Store"
            className={`${styles['tomo-cta']} ${styles['tomo-cta-primary']}`}
          >
            App Store
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            aria-label="Google Play"
            className={`${styles['tomo-cta']} ${styles['tomo-cta-primary']}`}
          >
            Google Play
          </a>
        </div>
      </section>

      <section>
        <h2>お問い合わせ・サポート</h2>
        <p>
          ともメモに関するご質問・不具合のご報告・その他お問い合わせは、以下の窓口までご連絡ください。
        </p>
        <p>
          メール: <a href={`mailto:${email}`}>{email}</a>
          <br />
          電話: <a href={`tel:${tel.replace(/[^\d+]/g, '')}`}>{tel}</a>（{businessHours}）
          <br />
          住所: 〒{postcode} {address}
        </p>
      </section>

      <section>
        <h2>連絡先アプリだけでは足りない場面に</h2>
        <p>
          連絡先は保存できても、「次に連絡したい日」や「会話で覚えておきたいこと」までは管理しにくいことがあります。
          ともメモは、連絡先を補完しながら、関係性を継続するための情報管理を支援します。
        </p>
      </section>

      <section>
        <h2>主な機能</h2>
        <div className={styles['tomo-feature-grid']}>
          {featureItems.map((item, idx) => (
            <div
              key={item.title}
              className={styles['tomo-feature-card']}
              style={{ '--tomo-accent': TAG_COLORS[idx] } as TomoAccentStyle}
            >
              <div className={styles['tomo-feature-card-header']}>
                <span className={styles['tomo-feature-dot']} aria-hidden="true" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>プライバシーとデータの取り扱い</h2>
        <p>
          ともメモでは、同期機能にクラウドサービスを利用して複数端末間でデータ共有を実現します。
          収集する情報と利用目的、保存期間、削除方法はポリシー本文に明記します。
        </p>
        <div className={styles['tomo-links']}>
          <Link href="/apps/friend-memo/terms">利用規約を見る</Link>
          <Link href="/apps/friend-memo/privacy">プライバシーポリシーを見る</Link>
        </div>
      </section>

      <section>
        <h2>よくある質問</h2>
        <dl className={styles['tomo-faq-list']}>
          {faqItems.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles['tomo-footer-cta']}>
        <h2>もっと詳しく</h2>
        <div className={styles['tomo-links']}>
          <a href={APP_STORE_URL} aria-label="App Store">
            App Store
          </a>
          <a href={GOOGLE_PLAY_URL} aria-label="Google Play">
            Google Play
          </a>
          <Link href="/#support">Begradへのお問い合わせ</Link>
          <Link href="/">Begradサイトトップ</Link>
        </div>
      </section>
    </main>
  );
};

export default TomoMemoLp;
