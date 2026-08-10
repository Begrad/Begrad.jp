# 概要

Begradホームページ
https://begrad.jp

STUDIOで構築していたが、頻繁な変更をせず、経費を削減できるので移行。
その後、Lolipop（レンタルサーバー・手動デプロイ）からVercelへ移行し、
Create React AppからNext.js（App Router）へ移行した。

## 技術スタック

- フロントエンド: React + TypeScript（Next.js App Router）
- スタイリング: CSS Modules（コンポーネントごとに分割）
- CMS: microCMS（`company` / `members` / `products`）、Server Componentから`cache()`でメモ化して取得
- テスト: Jest（`next/jest`）+ React Testing Library
- Lint/Format: ESLint（flat config）+ Prettier、いずれも`@tooling-configs`の共有設定を使用
- デプロイ: Vercel（`main`ブランチへのマージで自動デプロイ）
- 監視: Vercel Speed Insights / Analytics

## TODO

- [ ] `support@begrad.jp` がメールを受信できない（apexドメインにMXレコードが無い）。プライバシーポリシー・サポートページで問い合わせ先として案内しているため、受信できる状態にするか、窓口を変更するか方針を決める
- [ ] `fix/vercel-build-and-spa-routing` ブランチに残っている古いstash（Netlify検討時の未使用WIP）を整理する
- [ ] `/members/[memberId]` を`generateStaticParams`でSSG化するか検討する（現状はリクエスト時のサーバーレンダリング）

## Getting Started

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。

### 主なスクリプト

- `pnpm dev` — 開発サーバーを起動
- `pnpm build` — 本番用ビルド
- `pnpm start` — `pnpm build`後、本番相当のサーバーを起動
- `pnpm lint` — ESLint実行
- `pnpm test` — Jestでテスト実行
- `pnpm format` / `pnpm format:check` — Prettierでのフォーマット/チェック

環境変数はmicroCMSのAPIキー（`MICROCMS_API_KEY`）が必要です。`.env.local`に設定してください（サーバー専用の変数のため`NEXT_PUBLIC_`等のプレフィックスは付けません）。

## Learn More

[Next.js のドキュメント](https://nextjs.org/docs) を参照してください。
