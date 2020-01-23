---
title: Chrome Web Inspector を Inspect する
titlesuffix: true
thumb: true

images:
  - d1487c97.jpg

related:
  - /tracing-h2o
  - /the-rust-book
  - /atom-syndication

permalink: /chrome-web-inspector
---

Web Inspector の[フロントエンド](https://trac.webkit.org/browser/trunk/Source/WebInspectorUI/)は HTML, CSS, そして JavaScript で構成されています。
したがって、原理的に Inspector を Inspect できます。

![chrome-web-inspector]({{ site.image_store }}{{ page.images[0] }})

方法は Web Inspector を新しいウィンドウで開き、そこからさらに Web Inspector を立ち上げるだけ。
あるいは、Web Inspector の HTML ファイルをブラウザで直接開くという手もあります。
単純に Chrome を下記に向けるだけです (注: Chrome Version 31.0.1650.63 時点の話)。

```
chrome-devtools://devtools/bundled/devtools.html
```

すでに知っている人には馬の耳に念仏かと思いますが、そうでなければ Web Inspector をより身近な存在に感じるようになったのではないでしょうか。
