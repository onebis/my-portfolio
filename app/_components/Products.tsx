import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader, Spacer } from '@nextui-org/react'
import { MoreButton } from '@/app/_components/MoreButton'

const items = [
  {
    image: 'images/iOS.png',
    title: 'iOS/Androidアプリ開発',
  },
  {
    image: 'images/blog_image.png',
    title: 'ブログサイト作成',
  },
  {
    image: 'images/sample_site.png',
    title: 'サンプルサイト作成',
  },
]
export function Products() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>products</h1>
      <Spacer y={10} />
      <div className='flex justify-between gap-10'>
        {items.map((item) => (
          <div key={item.title}>
            <p className='py-2 text-small'>{item.title}</p>
            <Image src={item.image} alt={item.title} width={264} height={180} />
          </div>
        ))}
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton />
      </div>
    </div>
  )
}
