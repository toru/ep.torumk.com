---
title: Nexus 5X が文鎮化して困った話
titlesuffix: true
permalink: /bricked-nexus-5x
published: true
---

メインで使っている [Nexus 5X](https://en.wikipedia.org/wiki/Nexus_5X) が急にフリーズし、起動しなくなりました。

具体的には、"Google" のロゴが現れる初期段階で起動に失敗し、勝手に再起動がかかり、同じところでまた落ちて再起動する、というループが症状です。
放置すると数百回に一回は起動しますが、またすぐにフリーズしてループに戻ってしまいます。
仕事にとても影響して迷惑極まりないです。

## 馴染むと文鎮化

調べてみたところ、どうやら一部の Nexus 5X と [Android 7.0 (Nougat)](https://www.android.com/versions/nougat-7-0/) との相性がすごぶる悪いらしく、かなりの人数がすでに bootloop について Android の [Issue Tracker で嘆いています](https://issuetracker.google.com/issues/37117345)。
不思議なことに自分は 9/1 に Android 7.0 にアップデートしたので、すでに 2 ヶ月たっています。
きっかけは何だったんだろうか。

悪あがきで System Cache Partition をワイプしたり、いろんなアプリの Cache をクリアするなどしましたが効果なしでした。
システムを起動できた一瞬の間に [2016-11 のアップデート (NRD91N)](https://source.android.com/security/bulletin/2016-11-01.html) が雲から降ってきて、これで直るかも！と期待しましたが、残念ながらアップデート後にループが悪化しました。

## ベンジャミンが飛んでゆく

Nexus 5X は今まで温かい目で見守ってきましたが、さすがにもう無理です。
保証で本体を交換するという選択肢もありますが、面倒なので、[Project Fi](https://fi.google.com/) 経由で [Pixel XL](https://en.wikipedia.org/wiki/Pixel_(smartphone)) を注文しました。
痛い出費です。

今回の出来事でスマートフォンの重要性を痛感しました。
とはいえ、こういった想定外の出来事は起きるものなので、重要なデバイスやソフトウェアの冗長化を見直していこうと思います。

## 関連リンク

- [Nexus 5x goes into bootloop after installing Android 7.0 Nougat OTA](https://issuetracker.google.com/issues/37117345)
- [My device restarts on its own or crashes - Nexus Help](https://support.google.com/nexus/answer/4582729)
- [Android 7 Nougat Update Causes Nexus 5X Bootloop Issue, And You Can't Fix It](http://www.techtimes.com/articles/178857/20160922/android-7-nougat-update-causes-nexus-5x-bootloop-issue-and-you-cant-fix-it.htm)
