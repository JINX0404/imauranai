# 算命学×性格診断アプリ

生年月日と性格傾向から、算命学と性格診断を組み合わせてあなたの本質を読み解く無料診断アプリです。

## 🚀 デプロイ方法

### Vercelでのデプロイ

1. [Vercel](https://vercel.com/)にアクセスしてアカウントを作成
2. 「Import Git Repository」をクリック
3. GitHubアカウントを連携して、`imauranai`リポジトリを選択
4. プロジェクト名を設定（例：`uranai-app`）
5. 「Deploy」ボタンをクリック

デプロイが完了すると、自動的にURLが発行されます。

## 🛠️ ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアプリケーションが起動します。

## 📁 プロジェクト構造

```
uranai/
├── app/                  # Next.js App Router
│   ├── diagnosis/        # 診断ページ
│   ├── result/          # 結果ページ
│   └── share/           # シェアページ
├── components/          # Reactコンポーネント
├── lib/                 # ユーティリティ関数
├── public/data/         # 診断結果JSONファイル
└── types/               # TypeScript型定義
```

## 🔧 診断データの追加方法

新しい診断パターンを追加する場合：

1. `public/data/`ディレクトリに新しいJSONファイルを作成
2. ファイル名は`日干_五行傾向_性格傾向.json`の形式
3. `default.json`を参考に診断結果を記述

## 📝 今後の実装予定

- [ ] Stripe決済の実装（有料プラン用）
- [ ] 相性診断機能
- [ ] 年間運勢機能
- [ ] より詳細な診断結果

## 🤝 貢献方法

1. このリポジトリをフォーク
2. 新しいブランチを作成（`git checkout -b feature/amazing-feature`）
3. 変更をコミット（`git commit -m '新機能を追加'`）
4. ブランチにプッシュ（`git push origin feature/amazing-feature`）
5. プルリクエストを作成