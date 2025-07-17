# 占いウェブアプリ開発ルール

## 技術スタック
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel
- **バージョン管理**: GitHub

## プロジェクト構造
```
uranai/
├── app/              # Next.js App Router
│   ├── layout.tsx    # ルートレイアウト
│   ├── page.tsx      # ホームページ
│   └── api/          # APIルート
├── components/       # 再利用可能なコンポーネント
├── lib/              # ユーティリティ関数
├── public/           # 静的ファイル
└── types/            # TypeScript型定義
```

## コーディング規約
1. **TypeScript**: 厳格な型定義を使用
2. **命名規則**: 
   - コンポーネント: PascalCase
   - 関数・変数: camelCase
   - 定数: UPPER_SNAKE_CASE
3. **コンポーネント**: 関数コンポーネントを使用
4. **状態管理**: React Hooksを活用

## Git運用
- コミットメッセージは日本語で記述
- 機能追加時はfeatureブランチを作成
- main/masterブランチへの直接プッシュはOK（個人プロジェクト）

## デプロイ
- GitHubへのプッシュ時に自動的にVercelでビルド・デプロイ
- 環境変数はVercelダッシュボードで管理