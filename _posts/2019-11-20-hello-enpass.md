---
title: 1Password から Enpass に乗り換えた
titlesuffix: true
thumb: true

images:
  - ff4ec04f.png

related:
  - /the-rust-book
  - /atom-syndication

permalink: /hello-enpass
---

長年愛用してきた [1Password](https://1password.com/) から [Enpass](https://www.enpass.io/) に (ほぼ) 乗り換えました。
1Password は [Dropbox](https://ja.wikipedia.org/wiki/Dropbox) を利用する場合に Dropbox へのフルアクセス権限を要求すること以外は不満のないソフトウェアでしたが、運営企業の方向転換に合わせて自分も別の道を模索することにしました。

![enpass-macos]({{ site.image_store }}{{ page.images[0] }})

乗り換え先の条件は実績 (コミュニティと外部監査) をはじめ、ローカルのファイルシステムで完結することと、買い切りライセンスの存在としました。
当初は巷で人気の [Bitwarden](https://bitwarden.com) (オープンソース) に心が揺らいでいました。
残念ながら自分が求めているものは Bitwarden の [Client-Server](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E3%82%B5%E3%83%BC%E3%83%90%E3%83%A2%E3%83%87%E3%83%AB) アーキテクチャではないので、今回は見送りました。
対して Enpass は[プロプライエタリ](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%83%97%E3%83%A9%E3%82%A4%E3%82%A8%E3%82%BF%E3%83%AA%E3%83%BB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)なものの、自分が求めているものすぎて、発見したときは驚きました。
おまけに Dropbox の扱いがちゃんとしているし、UI もサクサクで格好いい。
ライセンスについては、ちょうどサブスクリプションモデルへの転換期だったようで、既存顧客に対する[太っ腹な救済処置](https://twitter.com/tmaesaka/status/1197585473381658624)の恩恵を受ける形になりました。
まだ一握りのクレデンシャルで試験運用中ですが、そう遠くないうちに完全移行しそうです。
