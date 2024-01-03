import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader, Spacer } from '@nextui-org/react'
import { MoreButton } from '@/app/_components/MoreButton'

const items = [
  {
    image: 'images/iOS.png',
    title: 'NextJsで作るブログサイト',
  },
  {
    image: 'images/blog_image.png',
    title: 'NextJsで作るブログサイト',
  },
  {
    image: 'images/sample_site.png',
    title: 'NextJsで作るブログサイト',
  },
]
export function Contact() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>contact</h1>
      <Spacer y={10} />
      <div className='flex justify-between gap-10'></div>
    </div>
  )
}
