---
title: Gear | 計算機
permalink: /gear
layout: episode
---

成り行きで [Macintosh](https://ja.wikipedia.org/wiki/Macintosh) を長年つかい続けています。
[Apple](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%83%E3%83%97%E3%83%AB_(%E4%BC%81%E6%A5%AD)) とは[不思議な関係](https://twitter.com/tmaesaka/status/162135456581033984)です。
手元の計算資源が足りないときは [DigitalOcean](https://www.digitalocean.com/) や [GCP](https://ja.wikipedia.org/wiki/Google_Cloud_Platform) を利用しています。
Shell は [oh-my-zsh](https://ohmyz.sh/) の影響で [Zsh](https://ja.wikipedia.org/wiki/Z_Shell) を使い続けていましたが、最近はこだわりが減ってミニマルな設定の [Bash](https://ja.wikipedia.org/wiki/Bash) に回帰しました。

## 計画中のハードウェア

[SFF](https://en.wikipedia.org/wiki/Small_form_factor) (Small Form Factor) マシンを組むことにしました。
現在 [NCASE M1](https://ncases.com/) の発送まちです。

<pre class="spec">
Case: NCASE M1 V6.1
Mobo: ASUS ROG Strix X570-I
CPU:  AMD Ryzen 3 3200G APU
GPU:  TBD
RAM:  Corsair Vengeance LPX DDR4 32GB 3600Mhz C18
SSD:  Samsung 970 EVO NVMe M.2 500GB
PSU:  Corsair SF600 80+ Gold Certified
</pre>

## 現役のハードウェア

### MacBook Pro (13-inch, 2018)

<pre class="spec">
CPU: 2.7GHz Intel Core i7
RAM: 16GB 2133MHz LPDDR3
SSD: 512GB Apple SSD AP0512M
GPU: Intel Iris Plus Graphics 655 1536MB
</pre>

メインでつかっているマシンです。
タッチバーとキーボードが残念ですが、軽量なところが素晴らしい。
用途はプログラミングとリモートシステム管理です。
贅沢すぎる使い方かも。

### MacBook Pro (Retina, 15-inch, Mid 2015)

<pre class="spec">
CPU: 2.5 GHz Intel Core i7
RAM: 16 GB 1600 MHz DDR3
SSD: 512GB Apple SSD SM0512G
GPU: AMD Radeon R9 M370X 2GB (Discrete)
GPU: Intel Iris Pro 1536MB
</pre>

<a href="/t/fastly">Fastly</a> 社の福利厚生でもらいました。
mStand の上から常に外部ディスプレイに繋いで、デスクトップとして使っています。
[バッテリーの加熱問題](https://www.theverge.com/2019/6/20/18693136/apple-recall-2015-15-inch-macbook-pro-battery-overheat-fire-risk-safety)によって Apple に[自主回収](/apple-battery-recall-visit)されました。
この世代の MacBook Pro は名作だと思います。

### MacBook Air (11-inch, Mid 2012)

![unboxed-mba-11]({{ site.image_store }}b18623a3.jpg)

<pre class="spec">
CPU: 2GHz Intel Core i7
RAM: 8GB 1600MHz DDR3
SSD: 120GB Apple SSD TS128E (Toshiba)
Graphics: Intel HD Graphics 4000 1536MB
</pre>

年季が入ってきましたが、まだまだ現役で使い倒しています。
このマシンのおかげで今の自分があると言っても過言ではありません。
使わなくなったら娘に譲る予定です。

### ThinkPad X240

断捨離していた同僚から安く譲ってもらいました。
SSD 換装済み。
OS は [Arch Linux](https://ja.wikipedia.org/wiki/Arch_Linux) を選びました。
主な用途は素の Linux 環境下でのソフトウェア検証やプログラミングです。

## 過去のハードウェア

### ThinkPad X61

![x61]({{ site.image_store }}6ad6728b.jpg)

日本ではじめて購入したコンピュータです。
ヤフオクで購入した英語配列キーボードに換装しました。
メモリ増設、SSD 換装、外部バッテリーを取り付けるなど、簡素なカスタマイゼーションを施しました。
めっきり使わなくなったので、近々 E-Waste に出します。

### Intel ワークステーション

<pre class="spec">
Case: ANTEC ThreeHundred
Mobo: ASUS P8Z68-V (Z68 1155 ATX DDR3)
CPU:  Intel Core i7-2600K (1155/3.40/8M/C4/T8)
RAM:  ADT AX3U1600GC4G9-2G (DDR3 PC3-12800 4GBx2)
SSD:  Crucial M4 CT064M4SSD2
PSU:  KRPW-SS600W/85+ (ATX 600W 80+B)
</pre>

2011 年に組んだ開発機です。
パーツはドスパラ秋葉原店で買い集めました。
OS は Ubuntu (Lucid Lynx) だったと思います。
シンプルでパワフルな良いマシンでした。
米国への移住に伴って家族に譲りました。
プログラミング機から作曲機へ。

### AMD ワークステーション

はじめて組んだ自鯖です。
スペックは忘れました。
Gigabyte のマザボに [AMD Athlon 64](https://en.wikipedia.org/wiki/Athlon_64) を挿していたことだけは覚えています。
OS は [Fedora Core 3](https://fedoraproject.org/wiki/Releases/HistoricalSchedules#Fedora_Core_3_.28Codename:_Heidelberg.29) を入れていたと記憶しています。

### Apple iBook G3 Snow

はじめて購入した Mac ([PowerPC 500MHz](https://en.wikipedia.org/wiki/IBook#iBook_G3_Dual_USB_(%22Snow%22))) です。
Mac OS 9.1 がプリインストールされていて、Max OS X (10.1) のインストーラー CD が付属していました。
[Mozilla Application Suite](https://ja.wikipedia.org/wiki/Mozilla_Application_Suite) の起動に数十秒かかったのをよく覚えています。
このマシンで [Java](https://ja.wikipedia.org/wiki/Java) 言語に出会いました。

### UMAX Apus 2000

はじめての専用機です。
家族の知り合いに譲ってもらいました。当初の OS は Windows 98 で、後に悪名だかき Windows ME に入れ替えました。
このマシンで HTML や <a href="https://ja.wikipedia.org/wiki/Common_Gateway_Interface">CGI</a> に没頭しました。
