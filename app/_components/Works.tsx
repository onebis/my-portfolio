import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader, Spacer } from '@nextui-org/react'
import { Account } from '@/public/icons/account'
import { AccountDetail } from '@/public/icons/account_detail'
import { AccountTree } from '@/public/icons/account_tree'

const items = [
  {
    icon: <Account className='fill-gray-300/80' />,
    title: '600万件のデータ移行',
    body: '顧客のデータを移行するため、移行作業に従事。 チームリーダーを担当し自身の業務と並行でタスク管理なども行う',
  },
  {
    icon: <AccountTree className='fill-gray-300/80' />,
    title: '不動産システム開発',
    body: '購入者向けのアフターサービスシステムの開発。フロントからバックまでを一通り担当する',
  },
  {
    icon: <AccountDetail className='fill-gray-300/80' />,
    title: '人材会社の求人システム開発',
    body: 'リードエンジニアとして基盤設計から担当。お客様とのディレクションを含め、検索処理の高速化・技術選定・コードレビュー・仕様調整など全般的に関わらせていただきました。',
  },
]
export function Works() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl'>Works</h1>
      <Spacer y={10} />
      <div className='flex justify-between gap-10'>
        {items.map((item) => (
          <Card key={item.title} className='relative w-full rounded-3xl bg-transparent py-10'>
            <CardHeader className='flex justify-center overflow-visible py-2 after:absolute after:left-1/2 after:top-10 after:-z-10 after:h-16 after:w-14 after:rounded after:bg-yellow-400/10 after:blur-sm'>
              {item.icon}
            </CardHeader>
            <CardBody className='flex-col items-start gap-2 px-4'>
              <p>{item.title}</p>
              {/*<p className='text-tiny font-bold uppercase'>Daily Mix</p>*/}
              <small className='text-default-500'>{item.body}</small>
              {/*<h4 className='text-large font-bold'>Frontend Radio</h4>*/}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}
