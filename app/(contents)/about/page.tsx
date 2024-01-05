import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader } from '@nextui-org/react'

export default function about() {
  return (
    <div className='flex w-full items-center justify-center'>
      <Card shadow='none' isBlurred={true} className='w-full'>
        <CardBody>
          <div className='grid grid-cols-6 items-center  gap-3 md:grid-cols-12'>
            <div className='col-span-6 flex flex-col items-center'>
              <Image src='/images/self_image.png' alt='self image' width={80} />
              <div className='flex flex-col'>
                <p className='font-bold capitalize'>minoru horiuchi</p>
                <p className='inline text-small capitalize text-gray-400'>web developer</p>
              </div>
            </div>
            <div className='col-span-6 flex flex-col gap-3'>
              <p>
                フリーランスエンジニアの堀内と申します。創価大学での学びを経て、医師を目指した時期もありましたが、2016年にITの世界に魅了され、この分野でのキャリアをスタートしました。
              </p>
              <p>
                2017年からは、PHPをメイン言語としてWebシステム開発に携わり、さまざまなプロジェクトで技術力を磨いてきました。
              </p>
              <p>
                2019年には独立し、フリーランスとしてより幅広い経験を積むことを決意しました。主な技術スタックは、PHP、Laravel、React、Next.js、Flutterに及びます。
              </p>
              <p>
                クライアントの要望に応えるため柔軟で効率的なソリューションを提供しています。技術を通じてリアルな問題解決を行い、プロジェクトの成功に貢献いたします。
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}