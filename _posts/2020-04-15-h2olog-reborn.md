---
title: h2olog を C++ で書き直した
titlesuffix: true
thumb: true

images:
  - 50b0f637.jpg

related:
  - /h2olog-in-cpp
  - /tracing-h2o
  - /tracing-h2o-quic

permalink: /h2olog-reborn
tags: fastly
---

C-like な C++ で書き直した [h2olog](https://github.com/toru/h2olog) を [master ブランチに昇格](https://github.com/toru/h2olog/pull/58)しました。

![beach]({{ site.image_store }}{{ page.images[0] }})

引き続き [gfx](https://twitter.com/__gfx__) さんと [syohex](https://twitter.com/syohex) さんが開発に参加してくれたおかげで、円滑に[目的](/h2olog-in-cpp)を達成できました。
まったり作業で 2 週間と、健康的で良いペースの開発でした。
Concurrency に手をつけずに[社](/t/fastly)の実験で観測された Event Drop が解消されたので、まずまずの結果です。
[H2O](https://h2o.examp1e.net/) はベストプラクティスの詰まった良いソフトウェアなので、もっと運用支援ツールを充実させて流行らせていきたいです。
