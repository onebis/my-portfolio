'use client'

import { Card, CardBody, CardHeader, useDisclosure } from '@nextui-org/react'
import { WorkContentModal } from '@/app/_components/WorkContentModal'
import { WorkItemTop } from '@/app/_libs/type'

export function WorkContent({ key, item }: { key: string; item: WorkItemTop }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Card
        className='relative w-full rounded-3xl bg-transparent py-10'
        onPress={onOpen}
        isHoverable={true}
        isPressable={true}
        disableRipple
        key={key}
      >
        <CardHeader className='flex justify-center overflow-visible py-2 after:absolute after:left-1/2 after:top-10 after:-z-10 after:h-16 after:w-14 after:rounded after:bg-yellow-300/30 after:blur-sm dark:after:bg-yellow-400/10'>
          {item.icon}
        </CardHeader>
        <CardBody className='flex-col items-start gap-2 px-4'>
          <p className='text-lg font-bold'>{item.title}</p>
          <small className='text-default-500'>{item.body}</small>
        </CardBody>
      </Card>
      <WorkContentModal item={item} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
