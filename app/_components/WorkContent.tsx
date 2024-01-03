'use client'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'

import { ReactNode } from 'react'

type Item = {
  icon: ReactNode
  title: string
  body: string
}

export function WorkContent({ key, item }: { key: string; item: Item }) {
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
          <p>{item.title}</p>
          <small className='text-default-500'>{item.body}</small>
        </CardBody>
      </Card>
      <ContentModal
        title={item.title}
        content={item.body}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}

const ContentModal = ({
  title,
  content,
  isOpen,
  onOpen,
  onOpenChange,
}: {
  title: string
  content: string
  isOpen: boolean
  onOpen: () => void
  onOpenChange: () => void
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl' backdrop='blur'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
            <ModalBody>{content}</ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>
              <Button color='primary' onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
