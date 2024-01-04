import { Spacer } from '@nextui-org/react'
import { MoreButton } from '@/app/_components/MoreButton'
import { WorkContent } from '@/app/_components/WorkContent'
import { Account } from '@/public/icons/account'
import { AccountDetail } from '@/public/icons/account_detail'
import { AccountTree } from '@/public/icons/account_tree'

const items = [
  {
    icon: <Account className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '600万件のデータ移行',
    body: '顧客のデータを移行するため、移行作業に従事。 チームリーダーを担当し自身の業務と並行でタスク管理なども行う',
    term: '2017~2019',
    detail: `リラクゼーション業界における600万件の顧客データの移行と既存システムの改修プロジェクト。\nシステムの改修に加えて、データ移行の必要があり個人情報や、カード情報、履歴データ等を対象に実施。\n元々8時間かかっていたデータ移行処理を改善し、1時間ほどで完了するように改修を行いました。\n既存のプロセスをリファクタリングし、クエリのチューニングとメモリ管理の最適化を行い実現。特に、データの整合性の維持、不正確なデータや予期せぬ入力値への対応に苦労しました。\n自身がチームリーダーとなり、タスク管理や実装を平行して業務を担当。`,
    stack: 'PHP,CakePHP(ver3),MySQL,apache',
    position: 'チームリーダー・プログラマー',
    scale: 'チーム人数12人',
  },
  {
    icon: <AccountTree className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '人事システム開発',
    body: '大手広告代理店の社内人事の紙面媒体の手続きをシステム化。。要件のヒアリングを行い、機能設計をし実装まで幅広く担当。認証に既存の社員データを使用し、ユーザーのアクセス権も考慮する必要がありました。',
    term: '2020~2023',
    detail:
      '大手広告代理店の社内人事の紙面媒体での手続きをシステム化しました。もともと別のサービスを使用し、一部エクセル管理していた部分をシステム化するようにしました。別サービスとの連携をしつつ、フロー管理をするシステムの構築を行いました。\n要件のヒアリング、機能設計、実装まで幅広く担当。認証に既存の社員データを使用し、ユーザーのアクセス権も考慮する必要がありました。',
    stack: 'PHP(ver7.4),Laravel(ver8.2.1),MSSQL,nginx',
    position: 'フルスタックエンジニア',
    scale: 'チーム人数8人',
  },
  {
    icon: <AccountDetail className='fill-gray-700 dark:fill-gray-300/80' />,
    title: '求人管理システム開発',
    body: 'リードエンジニアとして基盤設計から担当。お客様とのディレクションを含め、検索処理の高速化・技術選定・コードレビュー・仕様調整など全般的に関わらせていただきました。',
    term: '2023~2024',
    detail:
      '求人管理をしている既存システムから、新しくリプレイスを行うプロジェクト。\nリードエンジニアとして基盤設計から担当。お客様とのディレクションを含め、技術選定・コードレビュー・仕様調整など全般的に関わらせていただきました。要件の中で検索処理の高速化が必須なためDBのアーキテクチャなど考慮する部分が多くありました。\nコードレビューの文化がなかったため、コードの保守性や安全性を担保するようにレビューを行うようにしました。どうしてもバグが入り込むものの、最小限に抑えることやメンバーが作業しやすいコードになることを意識していました。',
    stack: 'PHP(ver8.4),Laravel(ver10.2),MySQL,nginx',
    position: 'リードエンジニア・フルスタックエンジニア',
    scale: 'チーム人数10人',
  },
]

export function Works() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl'>Works</h1>
      <Spacer y={10} />
      <div className='flex justify-between gap-10'>
        {items.map((item) => (
          <WorkContent key={item.title} item={item} />
        ))}
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton />
      </div>
    </div>
  )
}
