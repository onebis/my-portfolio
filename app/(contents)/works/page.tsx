import { Card, CardBody, CardHeader, Link } from '@nextui-org/react'
import { work_contents } from '@/app/_libs/datas/work_contents'

export default function works() {
  return (
    <div className='px-6 py-3'>
      <div className='grid grid-cols-12 gap-10'>
        {work_contents.map((item) => (
          <Link
            href={`works/${item.id}`}
            key={item.title}
            className='col-span-12 w-full sm:col-span-6 md:col-span-4'
          >
            <Card
              className='relative rounded-3xl bg-transparent pb-2 pt-10'
              isHoverable={true}
              disableRipple
            >
              <CardHeader className='flex justify-center overflow-visible py-2 after:absolute after:left-1/2 after:top-10 after:-z-10 after:h-16 after:w-14 after:rounded after:bg-yellow-300/30 after:blur-sm dark:after:bg-yellow-400/10'>
                {item.icon}
              </CardHeader>
              <CardBody className='flex-col items-start px-4'>
                <p className='text-small text-default-500'> {item.term}</p>

                <p className='flex items-center text-lg font-bold'>{item.title}</p>
                <small className='mt-3 text-default-500'>{item.body}</small>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
