---
title: 1Password から Enpass に乗り換えた
titlesuffix: true
thumb: true

images:
  - ff4ec04f.png

related:
  - /the-rust-book
  - /tracing-h2o
  - /off-facebook-activity

permalink: /hello-enpass
---

長年愛用してきた [1Password](https://1password.com/) から [Enpass](https://www.enpass.io/) に (ほぼ) 乗り換えました。
1Password は [Dropbox](https://ja.wikipedia.org/wiki/Dropbox) の認証まわりの雑さ以外は不満のないソフトウェアでしたが、最近の運営企業の[方向転換](https://twitter.com/kennwhite/status/1195704336917180423)をきっかけに自分も別の道を模索することにしました。

![enpass-macos]({{ site.image_store }}{{ page.images[0] }})

乗り換え先の条件は実績 (とくに外部監査) をはじめ、ローカルのファイルシステムで完結することと、シンプルな買い切りライセンスの存在としました (価格や単位は特に気にしない)。
当初は巷で人気の [Bitwarden](https://bitwarden.com) (オープンソース) に心が揺らぎましたが、自分が求めているものは [Client-Server](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%A2%E3%83%87%E3%83%AB) アーキテクチャではないので、見送りました。
対して[同僚経由で知った](https://twitter.com/jedisct1/status/1195872906301071360) Enpass はクローズドソースなものの、自分の要件を見事に満たしていました。
Dropbox の扱いもちゃんとしているし、速くて気持ちの良い UI です。
ライセンスについては、ちょうどサブスクリプションモデルへの転換期だったようで、既存顧客に対する [Grandfathering](https://en.wikipedia.org/wiki/Grandfather_clause) の恩恵を受ける形になりました。
さすがに申し訳なく感じたので、ソフトウェア開発に専念してもらえるように[寄付がしたいと打診](https://twitter.com/tmaesaka/status/1197585473381658624)しました。
まだ一握りのクレデンシャルで試験運用中ですが、そう遠くないうちに完全移行しそうです。
