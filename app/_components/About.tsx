import { Avatar } from '@nextui-org/avatar'
import { Image } from '@nextui-org/image'
import { Card, CardHeader, CardBody, CardFooter, User } from '@nextui-org/react'

export function About() {
  return (
    <div className='flex justify-center px-6'>
      <Card shadow='none' isBlurred={true}>
        <CardHeader className='flex w-80 justify-center gap-3'>
          <Image src='/images/self_image.png' alt='self image' width={100} />
          <div className='flex flex-col'>
            <p className='font-bold capitalize'>minoru horiuchi</p>
            <p className='inline text-small capitalize text-gray-400'>Full stack developer</p>
          </div>
        </CardHeader>
        <CardBody>
          <p>
            <span className='font-bold'>2016年</span> サービス業界に従事
          </p>
          <p>
            <span className='font-bold'>2017年</span>{' '}
            SES会社へ入社。エンジニアとしてのキャリアをスタート
          </p>
          <p>
            <span className='font-bold'>2019年</span> フリーランスへ転向
          </p>
        </CardBody>
      </Card>
    </div>
  )
}
