import { Button, Chip, Link } from '@nextui-org/react'
import React from 'react'
import { work_contents as items } from '@/app/_libs/datas/work_work_contents'

export default function page({ params }: { params: { id: number } }) {
  const item = items[params.id - 1]
  return (
    <div className='w-full'>
      <div className='flex items-center gap-2 text-xl font-bold'>
        {item.title}
        <Chip size={'sm'} variant='faded'>
          {item.term}
        </Chip>
      </div>
      <div className='mt-10'>
        {item.detail.split('\n').map((line, index) => (
          <p key={index} className='mt-4 text-lg'>
            {line}
          </p>
        ))}
        <div className='mt-10 text-small'>
          <p>規模：{item.scale}</p>
          <p>ポジション：{item.position}</p>
          <p>STACK：{item.stack}</p>
        </div>
      </div>
      <Link href={'/works'} className='flex justify-end'>
        <Button color='danger' variant='light'>
          Back
        </Button>
      </Link>
    </div>
  )
}
