# lyrics-mobile

Developed using Expo.

## 📦 初期セットアップ

1. **依存パッケージのインストール**

   ```bash
   yarn install
   ```

2. **Expo の起動**

   ```bash
   yarn start
   ```

   コンソールに表示される QR コードを **Expo Go** アプリで読み取るか、以下のキー操作で実行します：

   - iOS シミュレーター：`i`
   - Android エミュレーター：`a`
   - 開発ビルド：`shift + i` / `shift + a`

3. **開発フォルダ構成**
   - [Expo Router](https://docs.expo.dev/router/introduction) によるファイルベースルーティングを採用しています。

---

## ⚙️ OpenAPI YAML 生成方法

`api/openapi.yaml` は自動生成スクリプトで構築します。  
（`src/data/` 内の TypeScript ファイルを解析して、`api/templates/base.yaml` をもとに統合）

1. **依存関係の確認**

   ```bash
   yarn install
   ```

2. **OpenAPI YAML の生成**

   ```bash
   yarn generate:openapi
   ```

   実行後、`api/openapi.yaml` が生成されます。

---

## 🌐 Swagger UI での確認方法

1. **Swagger UI 起動**

   ```bash
   yarn mock:server
   ```

2. **ブラウザで確認**

   ```
   http://localhost:3000
   ```

3. **他デバイスからアクセスする場合（同一 LAN 上）**

   開発マシンの IP アドレスを確認：

   ```bash
   ifconfig | grep "inet "
   ```

   出力例：

   ```
   inet 192.168.0.23
   ```

   api/openapi.yaml の以下の箇所を自身の IP アドレスに変更：

   ```
   servers:
    - url: http://192.168.1.7:3000
      description: Local Swagger Mock API
   ```

   その IP を使って他デバイスのブラウザからアクセス：

   ```
   http://192.168.0.23:3000
   ```

   > ※ルーターやファイアウォール設定によっては接続が制限される場合があります。

---

## 🧰 トラブルシューティング

- **モジュール解決エラー（Unable to resolve module）発生時**

  ```bash
  rm -rf node_modules .expo .expo-shared
  yarn cache clean
  yarn install
  yarn start -c
  ```

- **ポート競合エラー発生時**
  ```bash
  npx kill-port 8080
  ```

---

## 📚 参考リンク

- [Expo Documentation](https://docs.expo.dev/)
- [Swagger UI Docs](https://swagger.io/tools/swagger-ui/)
- [OpenAPI Specification](https://swagger.io/specification/)
