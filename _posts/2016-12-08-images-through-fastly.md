---
title: Fastly で画像を配信するようにした
titlesuffix: true
thumb: true
images:
  - 13fd7008.jpg

permalink: /images-through-fastly
tags: fastly
---

当ウェブサイトの画像を [Fastly](/t/fastly) で配信するようにしました。

![chicken-and-waffles]({{ site.image_store }}{{ page.images[0] }})

最近は [Historical Stats](https://docs.fastly.com/api/stats) の開発を担当しているので、都合の良い検証データを得るために導入しました。
Origin には [Google Cloud Storage](https://cloud.google.com/storage/) (GCS) を選びました。
セットアップは Fastly の[公式ドキュメント](https://docs.fastly.com/guides/integrations/google-cloud-storage)を参考にしました。
ついでに [Synthetic Response](https://docs.fastly.com/guides/basic-configuration/responses-tutorial) をつかった[テクニック](https://docs.fastly.com/guides/basic-configuration/creating-error-pages-with-custom-responses)で 403 エラーの見た目をよくしました。
結果、良い検証データが得られるようになりました。
満足。

## あわせて読みたい

- [Realtime CDN の Fastly に入社しました]({% post_url 2015-08-17-hello-fastly %})
