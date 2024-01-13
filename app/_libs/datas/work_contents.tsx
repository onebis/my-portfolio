import React from 'react'
import { DX } from '@/public/icons/DX'
import { Account } from '@/public/icons/account'
import { AccountDetail } from '@/public/icons/account_detail'
import { AccountTree } from '@/public/icons/account_tree'
import { Media } from '@/public/icons/media'
import { MobileApp } from '@/public/icons/mobile_app'

export const work_contents = [
  {
    id: 1,
    sort: 1,
    icon: <AccountDetail className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '求人管理システム開発',
    body: 'リードエンジニアとして基盤設計から担当。お客様とのディレクションを含め、技術選定・コードレビュー・仕様調整など全般的に関わる。',
    term: '2023~2024',
    detail:
      '求人管理をしている既存システムから、新しくリプレイスを行うプロジェクト。\nリードエンジニアとして基盤設計から担当。お客様とのディレクションを含め、技術選定・コードレビュー・仕様調整など全般的に関わらせていただきました。要件の中で検索処理の高速化が必須なためDBのアーキテクチャなど考慮する部分が多くありました。\nコードレビューの文化がなかったため、コードの保守性や安全性を担保するようにレビューを導入。どうしてもバグが入り込むものの、最小限に抑えることができました。メンバーが作業しやすいコードになることや、一貫性のあるコードになることを意識していました。',
    stack: 'PHP(ver8.4),Laravel(ver10.13.3),MySQL,nginx',
    position: 'リードエンジニア・フルスタックエンジニア',
    scale: 'チーム人数10人',
  },
  {
    id: 4,
    sort: 2,
    icon: <MobileApp className='fill-gray-700 dark:fill-gray-300/80' />,
    title: 'モバイルアプリ開発',
    body: 'Flutterを使用し、和服管理アプリを開発。状態管理にriverpodを使用し、通知機能、デザイン実装を担当。',
    term: '2023',
    detail:
      'Flutterを使用し、和服管理アプリを開発。お客様が店舗へ預けている和服の閲覧や、和服に関する情報を閲覧できるアプリ。通知機能や、基本的なデザイン実装を担当。バッグエンドはJavaでAPIを構築。\n状態管理にはriverpodを使用しました。データはローカル（端末）とサーバーどちらにも保存必要があり、ローカルではshared_preferencesを使用しました。firebaseを使用した通知機能も要件にあり実装しました。クリーンアーキテクチャをベースに設計されており、それぞれの用途に合わせてライブラリの選定、使用を行いました。',
    stack: 'Flutter,riverpod(ver2.1.3),shared_preferences(2.0.15)',
    position: 'プログラマー',
    scale: 'Flutterエンジニア4人,javaエンジニア3人',
  },
  {
    id: 2,
    sort: 3,
    icon: <AccountTree className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '人事システム開発',
    body: '大手広告代理店の社内人事の紙面媒体の手続きをシステム化。要件のヒアリングを行い、機能設計をし実装まで幅広く担当。',
    term: '2020~2023',
    detail:
      '大手広告代理店の社内人事の紙面媒体での手続きをシステム化しました。もともと別のサービスを使用し、一部エクセル管理していた部分をシステム化するようにしました。別サービスとの連携をしつつ、フロー管理をするシステムの構築を行いました。\n要件のヒアリング、機能設計、実装まで幅広く担当。認証に既存の社員データを使用し、ユーザーのアクセス権も考慮する必要がありました。',
    stack: 'PHP(ver7.4),Laravel(ver8.2.1),MSSQL,nginx',
    position: 'フルスタックエンジニア',
    scale: 'チーム人数8人',
  },
  {
    id: 5,
    sort: 4,
    icon: <DX className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '地方公共団体のDX化',
    body: '地方公共団体の紙媒体手続きをシステム化。手間だった紙での手続きのDX化を行いました',
    term: '2020',
    detail:
      '関東圏の公共団体での紙媒体で行っていた出生届や、婚姻届などのシステム化を行いました。\n要件から基本実装を行い、DB設計なども行いました。メンバーに若手が多く、サブリーダーのようなポジションで開発に関わりました。',
    stack: 'PHP,Laravel,MySQL,nginx',
    position: 'サブリーダー',
    scale: 'チーム人数5人',
  },
  {
    id: 6,
    sort: 5,
    icon: <Media className='fill-gray-700 dark:fill-gray-300/80' />,
    title: 'メディア業界のシステムリプレイス',
    body: '大手広告代理店で使用されているメディア管理システムのリプレイス。Rubyで書かれていたシステムをPHPへリプレイスを行う',
    term: '2019~2020',
    detail:
      '大手広告代理店で使用されているメディア管理システムのリプレイスを担当しました。Ruby（Ruby on Rails）で構築されたシステムをPHPに移行する作業でした。\n既存の処理を保持し、外観も同様に再現する必要があったため、新規開発に比べてかなりの工数が必要でした。設計書やドキュメントが一切なく、実際に稼働しているソースコードをそのままPHPで動かす必要がありました。Rubyのコードとその挙動を解析した後、PHPでの実装に取り組んでいましたが、思うように進まないことが多々ありました。\n進捗の遅延がチームメンバー間のコミュニケーション不足に起因すると感じたため、リーダーやメンバーとのコミュニケーションを強化し、業務を円滑に進めるよう努めました。この変化により、メンバー間の進捗や問題点を素早く把握できるようになり、遅延を減らすことができました。\n最終的にはチームリーダーを任せていただき、タスク管理と進捗管理を実装と並行して行うことになりました。',
    stack: 'PHP,Laravel,MySQL',
    position: 'チームリーダー・プログラマー',
    scale: 'チーム人数8人',
  },
  {
    id: 7,
    sort: 6,
    icon: <MobileApp className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '不動産システム開発',
    body: '不動産購入者へのアフターサービスシステムの開発。フロントからバックまでを一通り担当する。',
    term: '2019',
    detail:
      '不動産購入者へのアフターサービスシステムの開発。要件定義から行い、リーダーの方と二名で開発を実施しました。フロントからバックまでを一通り担当し、ログインや基本的なCRUDの実装を行いました。',
    stack: 'PHP,Laravel,MySQL',
    position: 'プログラマー',
    scale: 'チームメンバー2人',
  },
  {
    id: 3,
    sort: 7,
    icon: <Account className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '600万件のデータ移行',
    body: '顧客のデータを移行するため、移行作業に従事。 チームリーダーを担当し自身の業務と並行でタスク管理なども行う。',
    term: '2017~2019',
    detail: `リラクゼーション業界における600万件の顧客データの移行と既存システムの改修プロジェクト。\nシステムの改修に加えて、データ移行の必要があり個人情報や、カード情報、履歴データ等を対象に実施。\n元々8時間かかっていたデータ移行処理を改善し、1時間ほどで完了するように改修を行いました。\n既存のプロセスをリファクタリングし、クエリのチューニングとメモリ管理の最適化を行い実現。特に、データの整合性の維持、不正確なデータや予期せぬ入力値への対応に苦労しました。\n自身がチームリーダーとなり、タスク管理や実装を平行して業務を担当。`,
    stack: 'PHP,CakePHP(ver3),MySQL,apache',
    position: 'チームリーダー・プログラマー',
    scale: 'チーム人数12人',
  },
]
