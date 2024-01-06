'use client'
import { Image } from '@nextui-org/image'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { product_contents } from '@/app/_libs/datas/product_contents'

const item = product_contents.sample_site

export function SamplePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div>
      <Card
        className='relative w-full rounded-xl bg-transparent'
        onPress={onOpen}
        isHoverable={true}
        isPressable={true}
        disableRipple
      >
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>{item.title}</h4>
          <small className='text-default-500'>{item.description}</small>
          <p className='text-tiny font-bold'>{item.stack}</p>
        </CardHeader>
        <CardBody className='my-2 overflow-visible'>
          <Image
            removeWrapper
            src={item.image}
            alt='native app image'
            width={270}
            className='rounded-xl object-cover'
          />
        </CardBody>
      </Card>
      <ProductContentModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  )
}

const ProductContentModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onOpenChange: () => void
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl' backdrop='blur' className='p-10'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='text-xl'>{item.title}</ModalHeader>
            <ModalBody className='flex flex-col items-start'>
              <ul>
                <li>サンプルサイトを作成</li>
              </ul>
              <ul className='text-small text-default-500'>
                <li>PLATFORM：{item.description}</li>
                <li>STACK：{item.stack}</li>
              </ul>
              <div className='mt-3 flex w-full justify-center gap-5'>
                <Image src='images/sample_site.png' alt='image' width={200} />
                <Image src='images/blog_image.png' alt='image' width={200} />
              </div>
              <Link isExternal href='#' className='mt-5 flex w-full justify-center'>
                my sample page
              </Link>
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
