# TodoN（トドン）利用規約・プライバシーポリシー

## 概要

公開済みの「ともメモ（friend-memo）」の規約類を下敷きに、TodoN 版の利用規約・
プライバシーポリシー・サポートページを作成した。構成・見出し・文体・セクション順・
免責文言・準拠法・裁判管轄・未成年条項・お問い合わせ窓口はともメモを踏襲している。

## 追加・変更ファイル

- `src/app/apps/todon/page.tsx` … サポート／LP（`TomoMemoLp` 相当）
- `src/app/apps/todon/terms/page.tsx` … 利用規約ページ
- `src/app/apps/todon/privacy/page.tsx` … プライバシーポリシーページ
- `src/components/TodoNLp.tsx` / `TodoNTerms.tsx` / `TodoNPrivacy.tsx`
- `src/components/withTodoNProduct.ts`（+ テスト） … Products 一覧への差し込み
- `src/components/Products.tsx` … 一覧カードから `/apps/todon` への導線を追加

CSS はともメモと共通の `src/css/TomoMemoPages.module.css` を再利用。

## ともメモから踏襲した点（創作していない）

- 運営者表記「Begrad（当方）」、公式サイト `https://begrad.jp`、お問い合わせ窓口
- 準拠法（日本法）・専属的合意管轄・未成年条項・規約変更の手続き・免責の書き方
- 連絡先（メール／電話／住所）は microCMS の `getCompany()` を利用（ともメモと同一ソース）

## TodoN 固有として追記した点

- 第2条：個人＋チームのタスク管理、Web（todon.begrad.jp）＋モバイル一部機能、ベータ機能を含む
- チーム機能（共有タスク・コメント・操作履歴の可視性、招待メールアドレスの表示）
- 外部連携（Slack / Discord Webhook への通知送信への同意、URL 管理責任はユーザー）
- サブプロセッサ：Vercel（米国）、Supabase（保存リージョン ap-south-1 / ムンバイ）、
  Google Web Speech API（音声入力時のみ）、Supabase 標準メール
- AI 機能はすべて Begrad サーバー上のルールベース処理。外部 AI（LLM 等）へは送信しない
- 取得情報の詳細（タスク／サブタスク／チーム／キャパシティ／習慣／テンプレート／週次振り返り）
- Cookie：認証セッション（Supabase, httpOnly）、`todon_scope`、ダッシュボード表示設定。
  広告・解析 Cookie は不使用
- 安全管理措置（TLS、Supabase Auth、アプリケーション層での利用者別アクセス制御）

## 濁したまま（ともメモと同じ表現に合わせた）

- アカウント削除機能の提供予定 → 「現時点で機能はない」「お問い合わせ窓口で受付」
- データ保存期間の具体日数 → 「利用目的の達成に必要な範囲」「合理的な期間内」
- 反映タイミング → 「機能の仕様およびクラウド側の処理に依存」

## レビュー必須（公開前）

**本ドラフトは未レビュー。** 公開前に運営者による確認、可能であれば法務・プライバシーの
専門家によるレビューを必須とする。特に以下は要確認：

- 実際のサブプロセッサ構成・データ保存リージョンが記載と一致しているか
- 音声入力が実際に Web Speech API 経由か（ブラウザ依存の挙動）
- 「課金・広告なし」「外部 AI 不使用」が今後も維持される前提でよいか
- 最終更新日 2026-09-06（作成日）。公開日に合わせて要調整
- App Store / Google Play のリンク（現在 `#` プレースホルダ）
