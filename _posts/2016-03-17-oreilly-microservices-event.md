---
title: Microservices Casual Talks 後日談
titlesuffix: true
thumb: true

images:
  - c12b169f.jpg

related:
  - /fastly-altitude-2016
  - /hello-fastly

permalink: /oreilly-microservices-event
---
株式会社オライリー・ジャパン主催の「[マイクロサービスアーキテクチャ](https://www.oreilly.co.jp/books/9784873117607/)」出版記念イベント ([Togetter](https://togetter.com/li/949990)) で久しぶりに話してきました。

![random-day-at-fastly]({{ site.image_store }}{{ page.images[0] }})

制限時間 20 分で Microservices アーキテクチャを語るのは厳しいので、開発現場のリアルな話や、Microservices に対して厳しい内容に絞りました。

## どの帽子をかぶるべきか

Microservices を人前で語るときは、どの帽子をかぶるべきかで悩みます。

ソフトウェアエンジニアとしては、Microservices アーキテクチャに手を出したくなります。
自宅で無駄に巨大なファイルシステムを構築するのと似た感覚ですね。
一方で、例えば幼いプロダクトを育てている立場だと手間のかかる Microservices アーキテクチャに対して否定的になります。

## 今日の正解は明日の不正解

テクノロジー業界は動きが速く、システムというものは状況の変化に弱いものです。
例えば、ひとつの大きな案件によって設計の前提が変わってしまうという話は、よくあることです。
エンジニアが心底嫌うやつですね。
会社がうまくいっていると必ずこういう状況に遭遇します。
したがって、過去の選択を後悔せず、常に頭を柔軟にしながら前に進むことが大事という話をしました。

## 流行るものは流行る

Microservices アーキテクチャを採用したからといって、プロダクトは流行りません。
まずは頑丈なユーザベースを築きながら成長軌道に乗ることが重要です。
そういったステージでは、モノリシックな設計のほうが圧倒的に合理的です。
ステージに合わせて最良な手段を選びましょう。

最初から 100 万人を快適にサーブできるシステム開発に尽力しても、そこに到達するよりも先にプロジェクトが解散する可能性の方が高い、という論点に似ていますね。

## キラキラネーム現象

エンジニアやアーキテクトの利便性のために、Microservice にはよくコードネームがつけられます。
自分の観測範囲内だとコードネームは作者やチームの趣味で面白い名前がつけられがちです。
Fastly の場合は[創業者](https://twitter.com/crucially)の趣味がスキーなので、初期から存在する Microservices にはスキーリゾートの名前がつけられています。

## モニタリングの重要性

Microservices アーキテクチャは動くパーツが多いので、モニタリングが極めて重要です。
[James Lewis](https://www.thoughtworks.com/profiles/james-lewis) と [Martin Fowler](https://ja.wikipedia.org/wiki/マーティン・ファウラー) を引用しつつ、Datadog や New Relic などの紹介をしました。

## 開発環境

ディープなトピックです。
エンジニアの日常的な視点だと、ある瞬間の興味対象の Microservice って、担当プロジェクトに関連するひとつやふたつだけではないでしょうか。
とはいえ、依存している Microservice (たとえば監査サービスなど) があると、動作確認ができなくて困ります。
したがって、良い感じに自動で開発環境が構築される仕組みが必要という話をしました。

Fastly ではエンジニアはほとんど Mac を使っていて (or Linux)、仮想マシン上に複数の [LXC](https://linuxcontainers.org) が立ち上がっている環境で開発しています。
各 LXC がサービスを表すノードです。
この開発環境は専門のチームがメンテしてくれていて、困ったことがあるとチャットで助けてくれます。

## レジリエンスのテスト

プログラマからすると、ある Microservice がどこで動いているかは本来どうでもいいことです。
同じホスト内、別ホスト、別 IDC などです。
しかも、Microservices アーキテクチャは動いているパーツが多かったりなどで、外部要因 (物理障害など) による影響を受けやすいアーキテクチャです。

上記の理由から、Microservices アーキテクチャでは、レジリエンス (回復力) のテストが極めて重要になってきます。
レジリエンスのテスト手法として、[Shopify](https://www.shopify.com/) が公開している [toxiproxy](https://github.com/Shopify/toxiproxy) という簡易的に厳しいネットワーク環境をエミュレートできる仕組みや、[Netflix](https://www.netflix.com) の [Chaos Monkey](http://techblog.netflix.com/2012/07/chaos-monkey-released-into-wild.html) や [Chaos Kong](http://techblog.netflix.com/2015/09/chaos-engineering-upgraded.html) といった常識はずれのテスト手法を紹介しました。

## Fastly の Polyglot な環境

Fastly ではいろんなプログラミング言語を活用してシステムを構築しています。
たとえばスループットが死活問題なリアルタイム処理の課題に、表現力が豊かなものの、計算速度に難のある言語を選択するメリットはありません。
一方で、文字列操作やテンプレートエンジンを使い倒すウェブ系のプロジェクトにはスクリプト言語の方が適していることが多いです。

## 大事なこと

Microservices という言葉をよく耳にするようになりましたが、結局はアーキテクチャのひとつです。
万能なアーキテクチャは存在せず、誤った選択は逆に技術者の生産性や幸せ度を低下します。
Microservices も例外ではありません。
