import { Spacer } from '@nextui-org/react'
import { MoreButton } from '@/app/_components/MoreButton'
import { BlogProduct } from '@/app/_components/products/BlogProduct'
import { SamplePage } from '@/app/_components/products/SamplePage'
import { ToDoWithTab } from '@/app/_components/products/ToDoWithTab'

export function Products() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>products</h1>
      <Spacer y={10} />
      <div className='flex justify-between gap-10'>
        <ToDoWithTab />
        <BlogProduct />
        <SamplePage />
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton />
      </div>
    </div>
  )
}
