import React from "react";
import { Link } from "react-router-dom";
import "../css/TomoMemoPages.css";
import tomoMemoLogo from "../assets/tomo-memo-logo.png";

const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";

const tintColorLight = "#3498db";
const TAG_COLORS = [
  "#3498db", // blue
  "#2ecc71", // green
  "#e74c3c", // red
  "#f39c12", // orange
  "#9b59b6", // purple
  "#1abc9c", // turquoise
  "#34495e", // dark blue
  "#e67e22", // dark orange
];

const featureItems: Array<{ title: string; description: string }> = [
  {
    title: "友だち情報の一元管理",
    description: "連絡先に加えて、覚えておきたいことをまとめて記録",
  },
  {
    title: "タグで分類",
    description: "グループや文脈で整理して一覧しやすく",
  },
  {
    title: "カスタム項目",
    description: "自分用の項目を追加して柔軟に記録",
  },
  {
    title: "ニックネーム",
    description: "複数ニックネームに対応し、表示はニックネーム優先",
  },
  {
    title: "次に連絡したい日",
    description: "連絡タイミングを忘れないためのメモ機能",
  },
  {
    title: "アーカイブ",
    description: "使わなくなったが消したくない情報を退避",
  },
  {
    title: "クラウド同期",
    description: "アカウントで複数端末間のデータ同期（クラウド）",
  },
  {
    title: "無料で利用可能 + プレミアム",
    description: "無料枠あり、プレミアムで制限解除",
  },
];

const screenshots = [
  "/friend-memo/screenshots/friend-memo-home.png",
  "/friend-memo/screenshots/friend-memo-detail.png",
  "/friend-memo/screenshots/friend-memo-tags.png",
];

const faqItems = [
  {
    q: "無料で使えますか？",
    a: "基本機能は無料で利用できます。より多くの項目や高度な利用にはプレミアム機能を提供予定です。",
  },
  {
    q: "データはどのように保存されますか？",
    a: "端末上での利用に加え、アカウント利用時はクラウドサービスの同期により複数端末で同じデータを扱えます。",
  },
  {
    q: "アカウントを削除した場合、データはどうなりますか？",
    a: "削除時の取り扱いは利用規約・プライバシーポリシーで明示します。公開前に最終仕様を反映します。",
  },
  {
    q: "オフラインでも使えますか？",
    a: "閲覧・編集の一部はオフラインでも利用できます。同期が必要な操作はオンライン時に反映されます。",
  },
];

const TomoMemoLp: React.FC = () => {
  return (
    <main
      className="tomo-page"
      style={{ ["--tomo-tint" as any]: tintColorLight }}
    >
      <section className="tomo-hero">
        <p className="tomo-eyebrow">Begrad Mobile App</p>
        <img
          src={tomoMemoLogo}
          alt="ともメモ アプリロゴ"
          className="tomo-logo"
          loading="lazy"
        />
        <h1>ともメモ（Friend Memo）</h1>
        <p className="tomo-lead">
          友だち・知人の情報を、あなたらしい項目で整理できるモバイルアプリ。
          大切なつながりを、記憶任せにしないためのメモ帳です。
        </p>
        <div className="tomo-links">
          <a
            href={APP_STORE_URL}
            aria-label="App Store（準備中）"
            className="tomo-cta tomo-cta-primary"
          >
            App Store（準備中）
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            aria-label="Google Play（準備中）"
            className="tomo-cta tomo-cta-primary"
          >
            Google Play（準備中）
          </a>
        </div>
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
        <div className="tomo-feature-grid">
          {featureItems.map((item, idx) => (
            <div
              key={item.title}
              className="tomo-feature-card"
              style={{ ["--tomo-accent" as any]: TAG_COLORS[idx] }}
            >
              <div className="tomo-feature-card-header">
                <span className="tomo-feature-dot" aria-hidden="true" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>スクリーンショット</h2>
        <p className="tomo-note">
          画像は公開前に差し替え予定です。配置先:
          <code>/public/friend-memo/screenshots/</code>
        </p>
        <div className="tomo-shot-grid">
          {screenshots.map((src, idx) => (
            <figure className="tomo-shot-card" key={src}>
              <div
                className="tomo-shot-image"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`ともメモのスクリーンショット${idx + 1}（準備中）`}
              />
              <figcaption>
                画像 {idx + 1}（準備中）
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2>プライバシーとデータの取り扱い</h2>
        <p>
          ともメモでは、同期機能にクラウドサービスを利用して複数端末間でデータ共有を実現します。
          収集する情報と利用目的、保存期間、削除方法はポリシー本文に明記します。
        </p>
        <div className="tomo-links">
          <Link to="/apps/friend-memo/terms">利用規約を見る</Link>
          <Link to="/apps/friend-memo/privacy">
            プライバシーポリシーを見る
          </Link>
        </div>
      </section>

      <section>
        <h2>よくある質問</h2>
        <dl className="tomo-faq-list">
          {faqItems.map((item) => (
            <div key={item.q}>
              <dt>{item.q}</dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="tomo-footer-cta">
        <h2>リリース情報をチェック</h2>
        <p>
          ストア公開後にリンクを更新します。先に規約・ポリシーをご確認いただけます。
        </p>
        <div className="tomo-links">
          <a href={APP_STORE_URL} aria-label="App Store（準備中）">
            App Store（準備中）
          </a>
          <a href={GOOGLE_PLAY_URL} aria-label="Google Play（準備中）">
            Google Play（準備中）
          </a>
          <a href="/#support">お問い合わせ</a>
          <a href="/">Begradサイトトップ</a>
        </div>
      </section>
    </main>
  );
};

export default TomoMemoLp;
