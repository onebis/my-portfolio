import { Image } from '@nextui-org/image'
import { Button, Link } from '@nextui-org/react'
import React from 'react'

export default function page() {
  return (
    <div className='w-full'>
      <div className='flex items-center gap-2 text-xl font-bold'>ブログサイト作成</div>
      <p className='mt-2 text-lg'>自身の技術ブログを作成</p>
      <div>
        <div className='text-small text-default-500'>
          <p>PLATFORM：web</p>
          <p>STACK：NextJS,TypeScript,microCMS</p>
        </div>

        <div className='mt-5 flex w-full justify-center gap-5'>
          <Image src='/images/blog_image.png' alt='image' width={200} />
          <Image src='/images/blog_image.png' alt='image' width={200} />
        </div>
        <div className='mt-6 flex justify-center'>
          <Link isExternal href='#'>
            my blog
          </Link>
        </div>

        <div className='flex justify-end'>
          <Link href={'/products'}>
            <Button color='danger' variant='light'>
              Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
