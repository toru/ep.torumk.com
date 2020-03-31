---
title: h2olog を C++ で書き直してみる
titlesuffix: true
thumb: true

images:
  - d24008f6.jpg

related:
  - /tracing-h2o
  - /tracing-h2o-quic
  - /images-through-fastly

permalink: /h2olog-in-cpp
---

[h2olog](https://github.com/toru/h2olog) を [C++](https://ja.wikipedia.org/wiki/C%2B%2B) で書き直すことを検討しています。
理由はイベントの読み取り側のパフォーマンスを上げることで、[BPF](https://www.kernel.org/doc/html/latest/bpf/index.html) の ring buffer を溢れにくくするためです。

![water]({{ site.image_store }}{{ page.images[0] }})

Python が悪いというわけではなく、高スループットのサーバから QUIC のトレースを取るには荷が重いという結論です。
[gfx](https://twitter.com/__gfx__) さんが[脱帽レベルの最適化](https://github.com/toru/h2olog/pull/36)を施してくれたにも関わらず、力及ばすでした。
得意でもない C++ を選んだ理由は [BCC](https://iovisor.github.io/bcc/) が [C++ API](https://github.com/iovisor/bcc/tree/master/src/cc/api) を提供しているからです。
とりあえず実験的に[ブランチ](https://github.com/toru/h2olog/tree/v2)を作りました。
C++ は奥が深いので、しばらくはいわゆる The Better C として扱おうと思います。
誰か CMakeLists.txt を書いてくれないかな。
