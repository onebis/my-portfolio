import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader, Link, Spacer } from '@nextui-org/react'
import { product_contents } from '@/app/_libs/datas/product_contents'

export default function page() {
  return (
    <div className='px-6 py-3'>
      <div className='grid grid-cols-12 gap-10'>
        {Object.entries(product_contents).map(([key, item]) => {
          return (
            <Link
              key={item.href}
              href={`products/todoapp`}
              className='col-span-12 w-full sm:col-span-6 md:col-span-4'
            >
              <Card
                className='relative w-full rounded-xl bg-transparent '
                isHoverable={true}
                isPressable={true}
                disableRipple
              >
                <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                  <h4 className='text-large font-bold'>{item.title}</h4>
                  <small className='text-default-500'>{item.description}</small>
                  <p className='text-tiny font-bold'>{item.stack}</p>
                </CardHeader>
                <CardBody className='my-2 flex items-center overflow-visible'>
                  <Image
                    removeWrapper
                    src={item.image}
                    alt='native app image'
                    width={270}
                    className='rounded-xl object-cover'
                  />
                </CardBody>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
