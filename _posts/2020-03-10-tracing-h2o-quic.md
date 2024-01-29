---
title: H2O の QUIC 層をトレースしよう
titlesuffix: true
thumb: true

images:
  - 3438a66d.jpg

related:
  - /tracing-h2o
  - /the-rust-book
  - /fastly-year-five

permalink: /tracing-h2o-quic
tags: fastly
---

最近 [gfx](https://twitter.com/__gfx__) さんが [h2olog](https://github.com/toru/h2olog) の開発に参加してくれたおかげで、 良いペースで h2olog が進化しています。
具体的には [H2O](https://h2o.examp1e.net/) の [QUIC](https://ja.wikipedia.org/wiki/QUIC) 層がトレース可能になりました。

各 QUIC event の出力は [Kazuho](https://twitter.com/kazuho) さんの要望で [JSON](https://ja.wikipedia.org/wiki/JavaScript_Object_Notation) 形式にしました。
その恩恵は好きな [DW](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%8F%E3%82%A6%E3%82%B9) プラットフォームに出力を流しやすいことです。
ツールの使い方は [README#tracing-quic-events](https://github.com/toru/h2olog#tracing-quic-events) を参照してください。
なるべくシンプルに使えるように努力しています。
まだまだ課題がいくつもありますが、自分ひとりで考える必要がなくなったのは本当に嬉しい。
