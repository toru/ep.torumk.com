---
title: Atom feed を堂々と吐く
titlesuffix: true
og_image: /ep/42e2c964.png
permalink: /atom-syndication
---

Github Pages への移行ついでに [Atom feed](https://ja.wikipedia.org/wiki/Atom_(%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E9%85%8D%E4%BF%A1)#Atom_Syndication_Format) の配信を開始しました。

![gp-jekyll-feed]({{ site.object_store }}/ep/42e2c964.png)

[Google Reader](https://ja.wikipedia.org/wiki/Google%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC) が終了してから早や 5 年。
フィードという言葉をめっきり聞かなくなりました。
寂しいものです。
一方で、流行り廃りに関係なく Pub/Sub 関係は普遍的な概念なので、Syndication を守り続けることにしました。
[Subscribe](/feed.xml) してもらえると嬉しいです。

技術的にはあっけないほど簡単でした。GitHub Pages が [jekyll-feed](https://github.com/jekyll/jekyll-feed) という plugin の利用を認めているので、[乗っかりました](https://github.com/tmaesaka/ep.torumk.com/issues/2)。
先走って Liquid Template で XML を生成しなくてよかった。

## あわせて読みたい

- [Fastly で画像を配信するようにした]({% post_url 2016-12-08-images-through-fastly %})
