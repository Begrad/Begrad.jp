import Link from 'next/link';
import type { CSSProperties } from 'react';

import styles from '../css/TomoMemoPages.module.css';
import type { Company } from '../microCMS/apiClient';

const WEB_APP_URL = 'https://todon.begrad.jp';
const APP_STORE_URL = '#';
const GOOGLE_PLAY_URL = '#';

const tintColorLight = '#3498db';
const ACCENT_COLORS = [
  '#3498db',
  '#2ecc71',
  '#e74c3c',
  '#f39c12',
  '#9b59b6',
  '#1abc9c',
  '#34495e',
  '#e67e22',
];

interface TomoTintStyle extends CSSProperties {
  '--tomo-tint'?: string;
}

interface TomoAccentStyle extends CSSProperties {
  '--tomo-accent'?: string;
}

const featureItems: Array<{ title: string; description: string }> = [
  {
    title: '「今日やること」に集中',
    description: '期日と重さから、今日こなす分だけを見渡せます',
  },
  {
    title: '個人とチーム',
    description: '同じ画面で、自分のタスクとチームのタスクを切り替え',
  },
  {
    title: 'サブタスクとポイント',
    description: '大きな作業を分解し、完了ポイントで進み具合を可視化',
  },
  {
    title: '重要度・緊急度で整理',
    description: '重要度・緊急度・重さ・カテゴリ・プロジェクトで分類',
  },
  {
    title: '繰り返しと習慣',
    description: '定期タスクや習慣を登録して抜け漏れを防止',
  },
  {
    title: 'テンプレートと週次振り返り',
    description: 'よく使う構成を再利用し、週ごとに成果を振り返り',
  },
  {
    title: 'Slack / Discord 通知',
    description: 'Webhook を登録すると完了・担当割り当てを通知',
  },
  {
    title: '無料で利用可能',
    description: '現時点では無料。課金・広告はありません',
  },
];

const faqItems = [
  {
    q: '無料で使えますか？',
    a: '現時点ではすべての機能を無料でご利用いただけます。課金・広告はありません。',
  },
  {
    q: 'データはどのように保存されますか？',
    a: '認証・データ同期に Supabase を利用し、暗号化された通信でクラウド上に保存されます。データの保存リージョンは ap-south-1（インド・ムンバイ）です。',
  },
  {
    q: 'AI にタスクの内容が送信されますか？',
    a: 'いいえ。サブタスク提案や重さの推定などは Begrad のサーバー上で動くルールベースの処理で、外部の AI サービスは利用していません。',
  },
  {
    q: 'アカウントを削除したい場合は？',
    a: '現時点でアプリ内に削除機能はありません。退会・データ削除のご請求はお問い合わせ窓口で受け付けます。詳細は利用規約・プライバシーポリシーに記載しています。',
  },
];

type Props = Pick<Company, 'email' | 'tel' | 'address' | 'postcode' | 'businessHours'>;

const TodoNLp: React.FC<Props> = ({ email, tel, address, postcode, businessHours }) => {
  return (
    <main
      className={styles['tomo-page']}
      style={{ '--tomo-tint': tintColorLight } as TomoTintStyle}
    >
      <section className={styles['tomo-hero']}>
        <p className={styles['tomo-eyebrow']}>Begrad App</p>
        <h1>TodoN（トドン）</h1>
        <p className={styles['tomo-lead']}>
          個人でもチームでも使える、「今日やること」に集中するためのタスク管理アプリ。
          やることを分解し、今日こなす分だけに向き合えます。
        </p>
        <div className={styles['tomo-links']}>
          <a
            href={WEB_APP_URL}
            aria-label="TodoN を開く"
            className={`${styles['tomo-cta']} ${styles['tomo-cta-primary']}`}
          >
            アプリを開く
          </a>
          <a href={APP_STORE_URL} aria-label="App Store" className={styles['tomo-cta']}>
            App Store
          </a>
          <a href={GOOGLE_PLAY_URL} aria-label="Google Play" className={styles['tomo-cta']}>
            Google Play
          </a>
        </div>
      </section>

      <section>
        <h2>お問い合わせ・サポート</h2>
        <p>
          TodoN に関するご質問・不具合のご報告・その他お問い合わせは、以下の窓口までご連絡ください。
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
        <h2>やることリストだけでは足りない場面に</h2>
        <p>
          タスクは書き出せても、「今日どれをやるか」「誰が担当か」までは管理しにくいことがあります。
          TodoN
          は、タスクを分解し、重さや期日から今日の分を見極めながら、個人とチームの進行を支援します。
        </p>
      </section>

      <section>
        <h2>主な機能</h2>
        <div className={styles['tomo-feature-grid']}>
          {featureItems.map((item, idx) => (
            <div
              key={item.title}
              className={styles['tomo-feature-card']}
              style={{ '--tomo-accent': ACCENT_COLORS[idx] } as TomoAccentStyle}
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
          TodoN は、認証とデータ同期に Supabase を利用します。収集する情報と利用目的、保存場所、
          外部サービスとの連携、削除方法はポリシー本文に明記しています。
        </p>
        <div className={styles['tomo-links']}>
          <Link href="/apps/todon/terms">利用規約を見る</Link>
          <Link href="/apps/todon/privacy">プライバシーポリシーを見る</Link>
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
          <a href={WEB_APP_URL} aria-label="TodoN を開く">
            アプリを開く
          </a>
          <Link href="/#support">Begradへのお問い合わせ</Link>
          <Link href="/">Begradサイトトップ</Link>
        </div>
      </section>
    </main>
  );
};

export default TodoNLp;
