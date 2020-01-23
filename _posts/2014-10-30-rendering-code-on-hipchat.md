---
title: HipChat でコードを共有する
titlesuffix: true
thumb: true

images:
  - 588df8f6.png

related:
  - /chrome-web-inspector
  - /the-rust-book
  - /hello-enpass

permalink: /rendering-code-on-hipchat
---

[Slack](https://ja.wikipedia.org/wiki/Slack_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)) の勢いが目まぐるしい今日この頃ですが、今日は [HipChat](https://en.wikipedia.org/wiki/HipChat) の話です。

![fizz-buzz]({{ site.image_store }}{{ page.images[0] }})

ここ数年、仕事上のコミュニケーションは HipChat で行ってきました。
会話だけでなく、仕事関係のあらゆる「出来事」を一箇所に集約することによって、とても仕事が楽になりました。
本質的には「IRC + bot」運用と変わらないわけですが、それをいろんな端末から誰でも使えるようになったのは素晴らしい。
本題ですが、[tokuhirom の tweet](https://twitter.com/tokuhirom/status/527672108764000257) で、/code という slash コマンドを知りました。
このコマンドを使うと、syntax ハイライト付きでコードをチャットルームに貼れます。
これは地味に嬉しい。
